import React, { useEffect, useState } from 'react'
import InfographicsMessage from './InfographicsMessage';

function InfographicsMessages() {
    const [infographicsMessages, setInfographicsMsg]=useState([]);

    useEffect(()=>{
        fetchInfographicsMessages();
     }, []);
 
     const fetchInfographicsMessages = async () => {
       const url = 'http://192.168.8.155/mint-intranet/public/api/infographics_message_displays';
       const response = await fetch(url);
       const data = await response.json();
       setInfographicsMsg(data);
   }
  return (
      <div>
        {
            infographicsMessages.map((infographicsMessage)=>(
                <InfographicsMessage infographicsMessage={infographicsMessage} key={infographicsMessage.id} />
            ))
        }
       </div>
  )
}

export default InfographicsMessages