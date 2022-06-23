import { useReducer } from 'react'
import uuid from 'uuid'
import ContactContext from './contactContex'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'
import {contactReducer} from "./contactReducer"

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'fat',
        phone: '091912121212',
        email: 'fat@gmail.com',
        type: 'personal',
      },
      {
        id: 2,
        name: 'zat',
        phone: '09198525852',
        email: 'zat@gmail.com',
        type: 'professional',
      },
      {
        id: 1,
        name: 'mat',
        phone: '09197878741',
        email: 'mat@gmail.com',
        type: 'personal',
      },
    ],
  }
  const [state,dispatch]=useReducer(contactReducer,initialState);
//   Add Contact
//   Delete Contact
//   Set Current Contact
//   Clear Current Contact
//   Update Contact
//   Filter Contact
//   Clear Filter
<ContactContext.Provider
value={{
    contacts:state.contacts
}}
>
    {props.children}
</ContactContext.Provider>
}

export default ContactState 