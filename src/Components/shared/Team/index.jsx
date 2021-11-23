import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

function Team() {
  const members = [
    {
      id: 1,
      image:'',
      firstName: 'Ilia',
      lastName: 'de Leon',
      role: 'UX Designer',
      portfolio: 'https://www.iliadeleon.com/',
      twitter: '',
      github: 'https://github.com/iliadeleon',
      linkedIn: 'https://www.linkedin.com/in/iliadeleon/',
    },
    {
      id: 2,
      image:'',
      firstName: 'Greg',
      lastName: 'Goldman',
      role: 'Software Engineer',
      portfolio: '',
      twitter: '',
      github: 'https://github.com/greggoldman11',
      linkedIn: 'https://www.linkedin.com/in/greggoldman1/',
    },
    {
      id: 3,
      image:'',
      firstName: 'Matt',
      lastName: 'Moore',
      role: 'Software Engineer',
      portfolio: 'https://mattm.page/',
      twitter: '@Matt_MMoore',
      github: 'https://github.com/mmmoore1313',
      linkedIn: 'https://www.linkedin.com/in/matt-m-moore-130013/',
    },
  ]
  return (
    <CardGroup>
      {members.map((member) => (
      <Card item key={member.id}>
        <Card.Img variant="top" src={member.image} />
        <Card.Body>
          <Card.Title>
            {member.firstName} {member.lastName}
          </Card.Title>
          <Card.Text>
            {member.role}
          </Card.Text>
          <Card.Footer>
            <ul>
              <li>
                <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href={member.twitter}>
                  <MDBIcon fab icon='twitter' />
                </MDBBtn>
              </li>
              <li>
                <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href={member.github}>
                  <MDBIcon fab icon='github' />
                </MDBBtn>
              </li>
              <li>
                <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href={member.linkedIn}>
                  <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>
              </li>
            </ul>
          </Card.Footer>
        </Card.Body>
      </Card>
    ))}
    </CardGroup>
  )
}

export default Team