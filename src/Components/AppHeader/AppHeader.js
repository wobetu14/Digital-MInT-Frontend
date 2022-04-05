import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faHome, faMessage, faFileDownload, faCloudDownload, faNoteSticky } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './AppHeader.css'

function AppHeader() {
  return (
    <div className='app_header'>
          <div className='app_logo'>
              <h1>#DigitalMInT</h1>
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
                {/* <li>
                  <Link to={'/login'}>
                    <FontAwesomeIcon icon={faUser} />
                    &nbsp; Login
                  </Link>
                </li> */}
              </ul>
          </div>
        </div>
  )
}

export default AppHeader