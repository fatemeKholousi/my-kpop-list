import React, { Fragment, useContext } from 'react'
import ContactContext from "../../../context/contact/contactContext"
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContex = useContext(ContactContext)
  const { contacts } = contactContex
  console.log(contactContex)

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id}/>
      ))}
    </Fragment>
  )
}

export default Contacts
