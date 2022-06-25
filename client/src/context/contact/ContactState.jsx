import { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ContactContext from './contactContext'
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types'
import contactReducer from './contactReducer'

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1000,
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
    current: null,
    filtered: null,
  }
  const [state, dispatch] = useReducer(contactReducer, initialState)
  //   Add Contact
  const addContact = (contact) => {
    contact.id = uuidv4()
    dispatch({ type: ADD_CONTACT, payload: contact })
  }
  //   Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id })
  }
  //   Set Current Contact
  const setCurrentContact = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact })
  }
  //   Clear Current Contact
  const clearCurrentContact = (id) => {
    dispatch({ type: CLEAR_CURRENT })
  }
  //   Update Contact

  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact })
  }
  //   Filter Contact
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text })
  }
  //   Clear Filter
  const clearFilter = (id) => {
    dispatch({ type: CLEAR_FILTER })
  }
  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrentContact,
        clearCurrentContact,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  )
}

export default ContactState
