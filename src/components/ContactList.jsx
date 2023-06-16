import React from 'react';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}: {number}</span>
          <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
