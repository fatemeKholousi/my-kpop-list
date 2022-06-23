import React, { Fragment, useContext } from 'react'
import contactContext from '../../../context/contact/contactContex'
import ContactItem from './ContactItem'

const Contacts = () => {
  const contactContex = useContext(contactContext)
  const { contacts } = contactContex

  return (
    <Fragment>
      {contacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id}/>
      ))}
    </Fragment>
  )
}

export default Contacts
