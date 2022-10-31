import React from 'react';
import shortid from 'shortid';
import './App.css';
import ContactForm from './Form/Form';
import ContactList from './Contacts/Contacts';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  submitHandler = (values, { resetForm }) => {
    values.id = shortid.generate();
    if (this.state.contacts.some(obj => obj.hasOwnProperty(values.name))) {
      window.alert('qwe');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, values],
    }));
    resetForm();
  };

  render() {
    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.submitHandler} />

        <h2 className="subtitle">Contacts</h2>
        <ContactList arr={this.state.contacts} />
      </>
    );
  }
}
