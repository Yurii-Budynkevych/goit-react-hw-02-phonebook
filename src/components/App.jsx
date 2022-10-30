import React from 'react';
import './App.css';
import shortid from 'shortid';
import ContactForm from './Form/Form';

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
      </>
    );
  }
}
