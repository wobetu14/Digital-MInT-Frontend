import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function AdminArea() {
    const [isLogin, setLogin]=useState(0);

    useEffect(() => {
      if(localStorage.getItem('token')){
          setLogin(1);
      }
    }, [])
    
  return (
    <div>
        <>
            <Link to={'/create_service'}>Create new service</Link>
        </>
    </div>
  )
}

export default AdminArea