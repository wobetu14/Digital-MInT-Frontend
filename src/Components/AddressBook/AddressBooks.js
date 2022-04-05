import React, { useEffect, useState } from 'react'
import AddressBook from './AddressBook';
import './AddressBooks.css';

function AddressBooks() {
    const [addresses, setAddresses]=useState([]);
    const [directorateName, setDirectorateName]=useState([]);

    useEffect(()=>{
        fetchAddressesData();
     }, []);

     const fetchAddressesData = async () => {
        const url = 'http://192.168.8.155/mint-intranet/public/api/address_book';
        const response = await fetch(url);
        const data = await response.json();
        setAddresses(data);
    }

    const searchByDirectorate = async (e)=>{
      e.preventDefault();
      const directorOfficeName = e.target.value;
      setDirectorateName(directorOfficeName);
      if(directorOfficeName){
        const url = `http://192.168.8.155/mint-intranet/public/api/address_book/${directorOfficeName}`;
        const response = await fetch(url);
        if(response){
          const searchAppData = await response.json();
          setAddresses(searchAppData);
        }
  
        else{
          setAddresses([])
        }
      }
    }

  return (
    <div className='addressbook_container'>
      <h1 className='addressbook_header'>Address Book</h1>

      <form className='form_appName'>
              <input
                className='textAppName'
                type='text'
                id='directorOfficeName'
                name='directorOfficeName'
                placeholder='Search by Directorate Name'
                value={directorateName}
                onChange={searchByDirectorate}
              />
          </form>

      <div className='addressbooks__list'>
        {
            addresses.map((address)=>(
                <AddressBook address={address} key={address.id} />
            ))
        }
       </div>
    </div>
  )
}

export default AddressBooks