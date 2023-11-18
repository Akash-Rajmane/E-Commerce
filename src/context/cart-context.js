import React,{useReducer} from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    removeAllItems: () => {}
});

export default CartContext;

const defaultState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch(action.type){
        case "ADD": {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );

            const existingCartItem = state.items[existingCartItemIndex];
            
            let updatedItems;
        
            if (existingCartItem) {
                const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + action.item.quantity,
                };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                updatedItems = state.items.concat(action.item);
            }
            
            const updatedTotalAmount = state.totalAmount + action.item.price*action.item.quantity
            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }
        

        case "REMOVE": {
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            );

            const existingCartItem = state.items[existingCartItemIndex];
            
            const updatedTotalAmount = state.totalAmount - existingCartItem.price;
            
            let updatedItems;
            
            if(existingCartItem.quantity===1){
                updatedItems = state.items.filter(item => item.id !== action.id);
            }else{
                const updatedItem = { ...existingCartItem, quantity: existingCartItem.quantity - 1 };
                updatedItems = [...state.items];
                updatedItems[existingCartItemIndex] = updatedItem;
            }

            return {
                items: updatedItems,
                totalAmount: updatedTotalAmount
            }
        }

        case "REMOVE_ALL": {
            return defaultState;
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

    const removeItemFromCartHandler = (id) => {
        dispatch({type:"REMOVE",id:id})
    }

    const removeAllItemsFromCartHandler = () => {
        dispatch({type:"REMOVE_ALL"})
    }

    let cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        removeAllItems : removeAllItemsFromCartHandler 
    }

return(
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
)
}