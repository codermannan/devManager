import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import {FaEye,FaRegTrashAlt} from 'react-icons/fa';

export default function Contact({ contact,deleteContact }) {
  //console.log(contact);
  const { id,firstName, lastName, email, profession, bio, image, gender, dateOfBirth } = contact;
  return (
    <Card className='mb-3'>
      <div className='d-flex'>
        <Card.Img className='card-img' src={image} />
        <Card.Body style={{ textAlign: 'left' }}>
          <span className='text-dark'>
          <Card.Title className='mb-3 text-muted'>{firstName} {lastName}</Card.Title>
          </span>
          <Card.Subtitle>{profession}</Card.Subtitle>
          <Card.Text>
            {bio}
          </Card.Text>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Gender : {gender}</ListGroup.Item>
            <ListGroup.Item>Email : {email}</ListGroup.Item>
            <ListGroup.Item>DOB : {dateOfBirth}</ListGroup.Item>
          </ListGroup>
          <div className='card-btn mt-3'>
            <Card.Link href="#">
              <button variant="warning ms-3" size="md" type='view'>
                  <FaEye/>
              </button>
            </Card.Link>
            <Card.Link href="#">
              <button variant="danger ms-3" size="md" onClick={ () => deleteContact(id)}>
                <FaRegTrashAlt />
              </button>
            </Card.Link>
          </div>
        </Card.Body>
      </div>
    </Card>
  )
}
