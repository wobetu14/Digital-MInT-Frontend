import axios from 'axios';
import React, { useState } from 'react'
import {Navigate } from 'react-router-dom';
import { rootURI } from '../rootURLs/root_uri';

function UserLogin({setLoggedIn, setUserData}) {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
      const userCreds={
          email:email,
          password:password
      }
 

      axios.post(rootURI+'/login', userCreds)
      .then((response)=>{
        if(response.data.logged_in===1){
          setLoggedIn(true);
          localStorage.setItem('token', response.data.token);
          setUserData(response.data.user);
          console.log("Token: "+localStorage.getItem('token'));
          return <Navigate to={'/'} />
        }

        else{
          alert(response.data.login_error);
        }
      })
      .catch((error)=>{
          alert(error)
      })
     
    }
  return (
    <div style={{marginTop:'70px', marginLeft:'230px'}}>
        
        <h4 className='appinfos_form_title'>User Login</h4>
                <form onSubmit={handleLogin} className='form_container'>
                    <div>
                    <input
                        className='form_element'
                        type='text'
                        name='email'
                        placeholder='Email'
                        onChange={(e)=>{setEmail(e.target.value)}}
                    />
                    </div>
                    <div>
                    <input
                        className='form_element'
                        type='password'
                        name='password'
                        placeholder='password'
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                    </div>

                    <div>
                    <button 
                        type='submit' 
                        className='form_submit_btn' 
                        style={{ width:'523px'}}
                        onClick={handleLogin}>
                      Login
                    </button>
                    </div>

                    {/* {successMsg && <p className='successMsg'>{successMsg}</p>} */}
                </form>
    </div>
  )
}

export default UserLogin