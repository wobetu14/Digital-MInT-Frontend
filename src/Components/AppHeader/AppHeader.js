import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHome, faMessage, faFileDownload, faCloudDownload, faNoteSticky, faAd, faAdd } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './AppHeader.css'
import DigitalMintLogo from '../logo/digital_mint_logo.png'

function AppHeader({loggedIn, userData:{first_name, last_name}, setLoggedIn}) {

 const handleLogout=()=>{
  localStorage.clear();
  setLoggedIn(false);
 }
  return (
    <div className='app_header'>
          <div className='app_logo'>
              <h1>
                <img className='logo_image' src={DigitalMintLogo}/>
              </h1>
          </div>
          <div className='app_menu'>
              <ul>
                <li><Link to={'/'}><FontAwesomeIcon icon={faHome} /> Home</Link></li>
                <li><Link to={'/address-book'}><FontAwesomeIcon icon={faAddressBook} /> Address Book</Link></li>
                <li><Link to={'/corporate-notices'}>
                  <FontAwesomeIcon icon={faMessage} />
                   &nbsp;Notice Board</Link>
                </li>

                <li>
                  <Link to={'/downloads'} >
                    <FontAwesomeIcon icon={faCloudDownload} /> Downloads
                  </Link>
                </li> 

               {
                 loggedIn &&
                 ( <div>
                    <li>
                      <Link to={'/create_service'}  style={{ fontSize:'12px', color:'red', padding:'5px', fontWeight:'normal' }}>
                        <FontAwesomeIcon icon={faAdd} /> New service
                      </Link>
                    </li>
                    <li>
                    <Link to={'/create_notice'}  style={{ fontSize:'12px', color:'red', padding:'5px', fontWeight:'normal' }}>
                        <FontAwesomeIcon icon={faAdd} /> New new notice
                      </Link>
                    </li>
                    
                    <li>
                      <Link to={'/upload_file'}  style={{ fontSize:'12px', color:'red', padding:'5px', fontWeight:'normal' }}>
                          <FontAwesomeIcon icon={faAdd} /> Upload downloadable file
                      </Link>
                    </li>
                    <li>
                      <Link to={'/create_infographic_message'}  style={{ fontSize:'12px', color:'red', padding:'5px', fontWeight:'normal' }}>
                          <FontAwesomeIcon icon={faAdd} /> New Infographic Message
                      </Link>
                    </li>

                    <li>
                      <Link to={'/'} onClick={handleLogout}  style={{ fontSize:'12px', color:'red', padding:'5px', fontWeight:'normal' }}>
                          <FontAwesomeIcon icon={faAdd} /> Logout
                      </Link>
                    </li>
                  </div>
                  ) 
               }

                <li>
                   <p style={{ fontSize:'12px', color:'blue', fontWeight:'normal' }}>{loggedIn && (first_name+' '+last_name)}</p>
                </li>
              </ul>
          </div>
        </div>
  )
}

export default AppHeader