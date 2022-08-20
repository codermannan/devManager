import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { Card, Button, ListGroup } from 'react-bootstrap'
import { FaPencilAlt,FaRegTrashAlt} from 'react-icons/fa'

function ContactDetails({contacts,deleteContact}) {

  const [contact,setContact] = useState({});
  const navigate = useNavigate();
  const {id} = useParams();
  const foundContact = contacts.find((contact) => contact.id === id);

  useEffect( () => {
    if(id && foundContact){
        setContact(foundContact)
    }
  },[id]);

  const handleDelete = (id) => {
    deleteContact(id)
  }

  const {firstName,lastName,email,gender,profession,bio,dateOfBirth,image} = contact;

  return (
    <>
    <h2 className='text-center mb-3'>Contact Details</h2>
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
            <ListGroup.Item>DOB : {dateOfBirth instanceof Object ? format(dateOfBirth,'dd/MM/yyyy'):dateOfBirth}</ListGroup.Item>
          </ListGroup>
          <div className='card-btn mt-3'>
            <Card.Link href="#">
              <button variant="warning ms-3" size="md" type='view'>
                  <FaPencilAlt />
              </button>
            </Card.Link>
            <Card.Link href="#">
              <button variant="danger ms-3" size="md" onClick={ () => handleDelete(id)}>
                <FaRegTrashAlt />
              </button>
            </Card.Link>
          </div>
        </Card.Body>
      </div>
    </Card>
    </>
  )
}

export default ContactDetails