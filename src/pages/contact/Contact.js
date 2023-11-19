import React, { useState } from 'react'

const Contact = ({addMessage}) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if(name.trim()===""||email.trim===""||phone.trim()===""||message.trim()===""){
            alert("Please enter data in all the fields");
            return;
        }
        let msg = {
            name,
            email,
            phone,
            message
        }
        addMessage(msg);
        alert("Message sent successfully.");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    }
    
  return (
    <>
    <h1 className='text-center mb-4'>Contact Us</h1>
    <form onSubmit={submitHandler} className='d-flex flex-column justify-content-center align-items-center gap-3 w-25 m-auto'>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name'/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email'/>
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="text" minLength={10} maxLength={10} placeholder='Mobile Number'/>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} type="text" placeholder='Message' rows={3} className='w-100'/>
        <button type="submit" className='btn btn-primary'>Submit</button>
    </form>
    </>
  )
}

export default Contact;