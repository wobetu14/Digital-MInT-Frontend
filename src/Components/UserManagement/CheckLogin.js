import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { rootURI } from '../rootURLs/root_uri';
import UserLogin from './UserLogin';

function CheckLogin({loggedIn, setLoggedIn, userData, setUserData}) {

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
          <UserLogin loggedIn={loggedIn} setLoggedIn={setLoggedIn} userData={userData} setUserData={setUserData}/>
         </div>
        );
     

}

export default CheckLogin