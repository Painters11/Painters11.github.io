import React from 'react'
import './footer.scss'

function Footer() {
  
  return (
    <div id='footer'>
      <h4>Say Hello to the team!</h4>
      <div className='team'>
        <ul className='dev'>
          <li className='member'>
            <h4>Ilia de Leon</h4>
            <ul>
              <li>twitter</li>
              <li>github</li>
              <li>linkedin</li>
            </ul>
          </li>
          <li className='member'>
            <h4>Gregg Goldman</h4>
            <ul>
              <li>twitter</li>
              <li>github</li>
              <li>linkedin</li>
            </ul>
          </li>
          <li className='member'>
            <h4>Matt Moore</h4>
            <ul>
              <li>twitter</li>
              <li>github</li>
              <li>linkedin</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer