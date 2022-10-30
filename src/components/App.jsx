import React from 'react';
import shortid from 'shortid';
import ContactForm from './Form/Form';

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  submitHandler = (values, { resetForm }) => {
    values.id = shortid.generate();
    this.setState(prevState => ({
      contacts: [...prevState.contacts, values],
    }));
    resetForm();
  };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.submitHandler} />
      </>
    );
  }
}
