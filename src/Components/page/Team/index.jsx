import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'
import LinkedIn from '../../misc/sm-icons/LinkedIn'
import Github from '../../misc/sm-icons/Github'
import Twitter from '../../misc/sm-icons/Twitter'
import ilia from './Ilia.png'

const ilia1 = {ilia}

function Team(ilia1,) {
  {}
  const members = [
    {
      id: 1,
      image: '',
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
    <div id='cardpage'>
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
              <Twitter href={member.twitter} />
              <Github href={member.github} />
              <LinkedIn href={member.linkedIn} />
            </Card.Footer>
          </Card.Body>
        </Card>
      ))}
      </CardGroup>
    </div>
  )
}

export default Team