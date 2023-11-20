import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = React.createContext({
    token: "",
    isLoggedIn: false,
    login: (token) => {},
    logout: () => {}
});

export default AuthContext;

export const AuthContextProvider = (props) => {
    let navigate = useNavigate();
    const initialToken = localStorage.getItem("token");
    const [token,setToken] = useState(initialToken);
   
    const userIsLoggedIn = !!token;

    
    
    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem("token", token);
        navigate("/store");
    }

    const logoutHandler = useCallback(() => {
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        navigate("/login");
    },[navigate]);

    //   // Auto-logout after 30 minutes 
    // useEffect(() => {
    //     let logoutTimer;
    //     if (userIsLoggedIn) {
    //     logoutTimer = setTimeout(() => {
    //         logoutHandler();
    //     }, 30 * 60 * 1000); //  minutes in milliseconds
    //     }

    //     // Clear the timer when the component unmounts or when the user logs in again
    //     return () => {
    //     clearTimeout(logoutTimer);
    //     };
    // }, [userIsLoggedIn,logoutHandler]);

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}