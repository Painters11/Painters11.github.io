import React from 'react'
// import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import {SocialMediaIconsReact} from 'social-media-icons-react'
import './footer.scss'

function Footer() {
  
  return (
    <div id='footer'>
      <h4>Checkout our Repo!</h4>
      <div className='team'>
        <ul className='dev'>
          <li className='member'>
            <h4>Ilia de Leon</h4>
            <ul>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="twitter" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(53,165,219,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://some-website.com/my-social-media-url" 
                  size="27" 
                />
              </li>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="github" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(91,102,107,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://github.com/iliadeleon" 
                  size="25" 
                />
              </li>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="linkedin" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(25,76,100,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://www.linkedin.com/in/iliadeleon/" 
                  size="25" 
                />
              </li>
            </ul>
          </li>
          <li className='member'>
            <h4>Gregg Goldman</h4>
            <ul>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="twitter" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(53,165,219,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://some-website.com/my-social-media-url" 
                  size="27" 
                  />
              </li>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="github" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(91,102,107,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://github.com/greggoldman11" 
                  size="25" 
                />
              </li>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="linkedin" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(25,76,100,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://some-website.com/my-social-media-url" 
                  size="25" 
                />
              </li>
            </ul>
          </li>
          <li className='member'>
            <h4>Matt Moore</h4>
            <ul>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="twitter" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(53,165,219,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://some-website.com/my-social-media-url" 
                  size="27" 
                />
              </li>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="github" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(91,102,107,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://github.com/mmmoore1313" 
                  size="25" 
                />
              </li>
              <li>
                <SocialMediaIconsReact 
                  borderColor="rgba(0,0,0,0.25)" 
                  borderWidth="5" 
                  borderStyle="solid" 
                  icon="linkedin" 
                  iconColor="rgba(255,255,255,1)" 
                  backgroundColor="rgba(25,76,100,1)" 
                  iconSize="5" 
                  roundness="20%" 
                  url="https://www.linkedin.com/in/matt-m-moore-130013/" 
                  size="25" 
                />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer