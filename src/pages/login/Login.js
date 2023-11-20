import React, { useContext, useState } from 'react';
import AuthContext from '../../context/auth-context';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {login} = useContext(AuthContext);


    const submitHandler = (e) => {
        e.preventDefault();
        let user = {
            email,
            password,
            returnSecureToken: true
        }
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
        {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
            "Content-Type":"application/json"
            }
        }).then(res=>{
            if(res.ok){
                return res.json().then((data)=>{
                    login(data.idToken);
            })
            }else{
                return res.json().then((data)=>{
                    alert(data.error.message);
                })
            }
        })
        setEmail("");
        setPassword("");
    }   

  return (
    <>
    <form onSubmit={submitHandler} className='d-flex flex-column justify-content-center align-items-center gap-4'>
        <h1>Login</h1>
        <input type={"email"} placeholder='Email' style={{width:"300px"}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type={"password"} placeholder='Password' style={{width:"300px"}} value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='btn btn-primary' type="submit">Login</button>
    </form>
    </>
  )
}

export default Login;