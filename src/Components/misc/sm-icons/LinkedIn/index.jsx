import React from 'react'
import { SocialMediaIconsReact } from 'social-media-icons-react'
import './linkedin.scss'

function LinkedIn() {
  return (
    <>
      <SocialMediaIconsReact 
        borderColor="rgba(0,0,0,0.25)" 
        borderWidth="5" 
        borderStyle="solid" 
        icon="linkedin" 
        iconColor="rgba(255,255,255,1)" 
        backgroundColor="rgba(25,76,100,1)" 
        iconSize="5" 
        roundness="20%" 
        size="25" 
      />
    </>
  )
}

export default LinkedIn