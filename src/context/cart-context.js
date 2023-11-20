import React,{useCallback, useReducer, useEffect} from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    cartId: null,
    addItem: (item) => {},
    removeAllItems: () => {},
    removeEntireItem: (id) => {},
    changeQuantity: (id,quantity) => {}
});

export default CartContext;

const updateCartData = async (email, cartId, cartItems, amount) => {
    const cartData = {
        items: cartItems,
        totalAmount: amount
    }
    try{
        const response = await fetch(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_KEY}/cart${email}/${cartId}`, {
                                    method: "PUT",
                                    body: JSON.stringify(cartData),
                                    headers: {
                                        "Content-Type": "application/json",
                                    },
                                });

        console.log(response);
    }catch(err){
        console.log(err);
    }
    
  };

const defaultState = {
    items: [],
    totalAmount: 0,
    cartId: null
}

const cartReducer = (state, action) => {
    const email = localStorage.getItem("email").replace("@","").replace(".","");
    switch(action.type){
        case "ADD": {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );

            const existingCartItem = state.items[existingCartItemIndex];
            
            let updatedItems;
            const updatedTotalAmount = state.totalAmount + action.item.price*action.item.quantity;
        
            if (existingCartItem) {
                const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
                
                updateCartData(email,state.cartId,updatedItems,updatedTotalAmount);

            } else {
                updatedItems = state.items.concat(action.item);
                
                updateCartData(email,state.cartId,updatedItems,updatedTotalAmount);
            }
            
            
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            }
        }
        

        case "REMOVE_ENTIRE_ITEM": {
            
            const updatedItems = state.items.filter(item => item.id !== action.id);
            const updatedTotalAmount = updatedItems.reduce((total,curr)=>total+Number(curr.quantity)*Number(curr.price),0);

            updateCartData(email,state.cartId,updatedItems,updatedTotalAmount);
           
            return {
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount,
            }
        }

        case "REMOVE_ALL": {
            let items = [];
            let totalAmount = 0;
            updateCartData(email,state.cartId,items,totalAmount);

            return {
                ...state,
                items: [],
                totalAmount: 0
            }
        }

        case "CHANGE_QUANTITY": {
            const updatedItems = state.items.map(item=>{
                if(item.id===action.id){
                    return {
                        ...item,
                        quantity: action.quantity
                    }
                }else{
                    return item;
                }
            })

            const updatedTotalAmount = updatedItems.reduce((total,curr)=>total+Number(curr.quantity)*Number(curr.price),0);
            
           
            updateCartData(email,state.cartId,updatedItems,updatedTotalAmount);
            
            
            return{
                ...state,
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }

        case "SET_CART":{
            return {
                ...state,
                items: action.items,
                totalAmount: action.totalAmount
            }
        }

        case "SET_CART_ID":{
            return{
                ...state,
                cartId : action.cartId
            }
        }

        default: 
            return defaultState;
    }
}

export const CartContextProvider = (props) => {
    const [cartState,dispatch] = useReducer(cartReducer,defaultState);
    
    const addItemToCartHandler = (item) => {
        dispatch({type:"ADD", item:item})
    }

    const removeAllItemsFromCartHandler = () => {
        dispatch({type:"REMOVE_ALL"})
    }
    
    const removeEntireItemFromCartHandler = (id) => {
        dispatch({type:"REMOVE_ENTIRE_ITEM",id:id})
    }

    const changeQuantityHandler = useCallback((id,quantity) => {
        dispatch({type:"CHANGE_QUANTITY", id:id, quantity:quantity})
    },[]);
    
    const email = localStorage.getItem("email");

    useEffect(() => {
       
        const fetchCartData = async (letterEmail) => {
            try {
                const response = await fetch(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_KEY}/cart${letterEmail}`);
                const data = await response.json();

                if (data && data.length > 0) {
                    // If cart data exists, get the _id
                    const cartId = data[0]._id;
                    dispatch({
                        type: "SET_CART",
                        items: data[0].items,
                        totalAmount: data[0].totalAmount,
                    });
                    // Optionally, store cartId in context if needed
                    dispatch({ type: "SET_CART_ID", cartId });
                } else {
                    // If cart data doesn't exist, create a new cart entry
                    const newCartResponse = await fetch(`https://crudcrud.com/api/${process.env.REACT_APP_CRUD_KEY}/cart${letterEmail}`, {
                        method: "POST",
                        body: JSON.stringify({
                            items: [],
                            totalAmount: 0,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    });

                    const newCartData = await newCartResponse.json();
                    const newCartId = newCartData._id;
                    // Optionally, store newCartId in context if needed
                    dispatch({ type: "SET_CART_ID", cartId: newCartId });
                }
            } catch (error) {
                console.error("Error fetching cart data:", error);
            }
        };

        if (email) {
            let letterEmail = email.replace("@","").replace(".","");
            fetchCartData(letterEmail);
        }
    }, [email]);


    let cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeAllItems : removeAllItemsFromCartHandler, 
        removeEntireItem: removeEntireItemFromCartHandler,
        changeQuantity: changeQuantityHandler
    }

return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)
}