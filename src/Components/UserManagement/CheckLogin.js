import React from 'react'
import UserLogin from './UserLogin';

function CheckLogin({setLoggedIn}) {
        const pStyle={
            marginTop:'70px',
            marginBottom:'0px',
            marginLeft:'20px', 
            color:'white',
            padding:'10px', 
            fontSize:'20px', 
            fontFamily:'helvetica',
            fontWeight:'normal',
            backgroundColor:'#CB4335', 
            textAlign:'center'
        };
        return (
         <div>
            <p style={pStyle}>Access to this page requires a user login!. Please login first
            </p>
          <UserLogin setLoggedIn={setLoggedIn} />
         </div>
        );
     

}

export default CheckLogin