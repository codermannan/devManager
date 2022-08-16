import React from 'react'
import Contact from './Contact';

export default function Contacts({contacts,deleteContact}) {
    //console.log(contacts);
  return (
    <>
    <h2 className='mt-2 text-center'>All Contacts</h2>
    {contacts.map( contact => <Contact key={contact.id} 
    contact={contact} deleteContact={deleteContact}
    />)}
    </>
  )
}
