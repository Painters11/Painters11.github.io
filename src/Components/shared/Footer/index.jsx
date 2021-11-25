import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './footer.scss'

function Footer() {
  const feet = [
    {
      id: 1,
      text: 'Say Hello to the Team!',
      url: '/team',
    },
    {
      id: 2,
      text:'Visit our Repo',
      url: 'https://github.com/Painters11/painters11',
    },
    {
      id: 3,
      text: '© 2021: Lunar Wranglers',
      url: 'https://github.com/Painters11',
    }
  ]
  
  return (
    <>
      <MDBFooter className='text-white text-center text-lg-left fixed-bottom' id='footer'>
        <MDBContainer className='p-2'>
          <MDBRow>
            {feet.map((foot) => (
              <MDBCol size='md' item key={foot.id}>
                <MDBRow>
                  <a href={foot.url} className='link-light'>        
                    {foot.text}
                  </a>
                </MDBRow>
              </MDBCol>
            ))}
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </>
  )
}

export default Footer