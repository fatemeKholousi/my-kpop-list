import React from 'react'
import { BsFillTelephoneFill, BsFilePlusFill } from 'react-icons/bs'

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact
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
      <button className='btn btn-dark btn-sm'>Edit</button>
      <button className='btn btn-danger btn-sm'>Delete</button>

      </p>
    </div>
  )
}

export default ContactItem
