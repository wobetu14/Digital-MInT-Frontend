import React from 'react'
import { infographics_displays } from '../../rootURLs/root_uri'
import './InfographicsMessage.css'

function InfographicsMessage({infographicsMessage:{ infographics_subject,
    infographics_description, image_path, display_duration, display_status, created_at }}) {
  return (
<div>
<div className="infographics_container">
   <div className='infographics_content'>
    <img className='infographics_image' alt='' src={`${infographics_displays + image_path}`}/>     
   </div>
</div>
</div>
  )
}

export default InfographicsMessage