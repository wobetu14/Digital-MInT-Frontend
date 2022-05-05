import axios from 'axios';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { rootURI } from '../rootURLs/root_uri';

function UserLogin({setLoggedIn}) {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const handleLogin=(e)=>{
        e.preventDefault();
      const userData={
          email:email,
          password:password
      }
 

      axios.post(rootURI+'/login', userData )
      .then((response)=>{
          localStorage.setItem('token', response.data.token);
          setLoggedIn(true)
          return <Navigate to={'/'} />
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