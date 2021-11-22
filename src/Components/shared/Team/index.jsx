import React from 'react'
import CardGroup from 'react-bootstrap/CardGroup'
import Card from 'react-bootstrap/Card'

const members = [
   {
    image:'',
    firstName: 'Ilia',
    lastName: 'de Leon',
    role: 'Designer',
    portfolio: 'https://www.iliadeleon.com/',
    twitter: '',
    github: 'https://github.com/iliadeleon',
    linkedIn: 'https://www.linkedin.com/in/iliadeleon/'
  },
  {
    image:'',
    firstName: 'Greg',
    lastName: 'Goldman',
    role: 'Engineer',
    portfolio: '',
    twitter: '',
    github: 'https://github.com/greggoldman11',
    linkedIn: 'https://www.linkedin.com/in/greggoldman1/'
  },
  {
    image:'',
    firstName: 'Matt',
    lastName: 'Moore',
    role: 'Engineer',
    portfolio: 'https://mattm.page/',
    twitter: '@Matt_MMoore',
    github: 'https://github.com/mmmoore1313',
    linkedIn: 'https://www.linkedin.com/in/matt-m-moore-130013/'
  }
]

function Team(props) {
  const members = props.members members.map((member) =>
  {member} )
  return (
    <CardGroup>
      <Card>
        <Card.Img variant="top" src={member.image} />
        <Card.Body>
          <Card.Title>
            {member.firstName} {member.lastName}
          </Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
  )
}

export default Team