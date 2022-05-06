import React, { useEffect, useState } from 'react'
import { rootURI } from '../../rootURLs/root_uri';
import InfographicsMessage from './InfographicsMessage';

function InfographicsMessages() {
    const [infographicsMessages, setInfographicsMsg]=useState([]);

    useEffect(()=>{
            fetchInfographicsMessages();
     }, []);

     /**
      * Sync in every 10 seconds
      */
      useEffect(()=>{
        const interval=setInterval(()=>{
            fetchInfographicsMessages();
          }, 10000)  
          return()=>clearInterval(interval)
     }, []);
 
     const fetchInfographicsMessages = async () => {
       const url = rootURI+'/infographics_message_displays';
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