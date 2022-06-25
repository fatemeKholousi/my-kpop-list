import React, { useContext } from 'react'
import { BsFillTelephoneFill, BsFilePlusFill } from 'react-icons/bs'
import ContactContext from '../../context/contact/contactContext'

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact
  const contactContext = useContext(ContactContext)
  const {
    deleteContact,
    setCurrentContact,
    clearCurrentContact,
  } = contactContext

  const onDelete = () => {
    deleteContact(id)
    clearCurrentContact()
  }

  const onEdit = (contact) => {
    setCurrentContact(contact)
  }

  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{' '}
        <span
          style={{ float: 'right' }}
          className={`badge ${
            type === 'professional' ? 'badge-success' : 'badge-primary'
          } `}
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <BsFilePlusFill />

            {email}
          </li>
        )}
        {phone && (
          <li>
            <BsFillTelephoneFill />

            {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm" onClick={() => onEdit(contact)}>
          Edit
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  )
}

export default ContactItem
