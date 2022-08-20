import React from 'react'
import ContactForm from '../components/contacts/ContactForm'
import {useParams} from 'react-router-dom'

function EditContact({contacts,updateContact}) {
  const {id} = useParams();
  const foundContact = contacts.find((contact) => contact.id === id);
  console.log("foundContact",foundContact);
  return <ContactForm contact={foundContact} updateContact={updateContact}/>
}

export default EditContact