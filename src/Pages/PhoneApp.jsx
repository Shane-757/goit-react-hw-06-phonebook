import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';




const PhoneApp = ({ initialContacts }) => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = (id) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.number.includes(filter)
  );

  return (
    <div className="PhoneApp">
      <h1>Phone Book</h1>
      <ContactForm contacts={contacts} setContacts={setContacts} />
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

PhoneApp.propTypes = {
  initialContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};



export default PhoneApp;