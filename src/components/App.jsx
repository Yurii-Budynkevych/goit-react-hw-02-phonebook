import React from 'react';
import shortid from 'shortid';
import './App.css';
import ContactForm from './Form/Form';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  submitHandler = (values, { resetForm }) => {
    values.id = shortid.generate();
    if (this.state.contacts.some(obj => obj.name === values.name)) {
      resetForm();
      return window.alert(`${values.name} is already in contacts`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, values],
    }));
    resetForm();
  };

  deleteHandler = contactID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID),
    }));
  };

  render() {
    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.submitHandler} />

        <h2 className="subtitle">Contacts</h2>
        <Filter />
        <ContactList arr={this.state.contacts} onDelete={this.deleteHandler} />
      </>
    );
  }
}
