import React, { Component } from 'react';

class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
        />
        <input type="tel"
          name="number"
          placeholder="Number"
          value={number}
          onChange={this.handleChange}
        />
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
