import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./sign_in.css"

const Sign_in = ()=>{
    const [logdata,setData]=useState({
        email:"",
        password:""
    });
    console.log(logdata)
const adddata =(e)=>{
    const{name,value}=e.target;
    setData(()=>{
        return{
            ...logdata,
            [name]:value
        }
    })
}
  return (
    <>
    <section>
        <div className='sign_container'>
            <div className='sign_header'>
                <img src="./winkel_logo.png" alt=''/>
            </div>
            <div className='sign_form'>
                <form>
                    <h2>Welocome to Winkel</h2>
                    <div className='form_data'>
                        <label  htmlFor='email'>Email</label>
                            <input type={Text} 
                            onChange={adddata}
                            value={logdata.email}
                            name="email" id="email"/>
                    </div>
                    <div className='form_data'>
                        <label  htmlFor='password'>Password</label>
                            <input type="Password" name="password"  onChange={adddata} value={logdata.password} id="password" placeholder='Atlest 8 character'/>
                    </div>
                    <button className='signin_btn'>Sign in</button>
                </form>
            </div>
            <div className='create_accountinfo'>
                <p>New to winkel ? </p>
                <NavLink  to="/register"><button> Create your Winkel account</button></NavLink>
            </div>
        </div>
    </section>
    </>
  )
}

export default Sign_in