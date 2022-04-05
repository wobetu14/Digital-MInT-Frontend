import React from 'react'
import { Link } from 'react-router-dom';
import './AddressBook.css';

function AddressBook({address:{office_name_am, office_name_en, office_email,
                               office_phone, office_responsibility, director_name, director_email,
                               created_at, updated_at}}) {
  return (
    <div>
       <div className='addressbook_containers'>
           <div className='addressbook_header_officename'>
           <h2>{office_name_am} ({office_name_en})</h2>
           </div>
           <div className='addressbook_body'>
               <div className='addressbook_detail'>
                <p><strong>Office Name: </strong>{office_name_am} ({office_name_en})</p>
                <p><strong>Office Email: </strong>{office_email}</p>
                <p><strong>Office Phone: </strong>{office_phone}</p>
                {/* <p><strong>Office Responsibility: </strong>{office_responsibility}</p> */}
                <p><strong>Director: </strong>{director_name}</p>
                <p><strong>Director's Email: </strong>
                
                  <a href={`mailto:${director_email}`}>{director_email}</a>
                  </p>
               </div>
           </div>
       </div> 
    </div>
  )
}

export default AddressBook