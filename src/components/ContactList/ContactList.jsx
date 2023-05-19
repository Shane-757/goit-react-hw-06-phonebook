import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../PhonebookSlice/PhonebookSlice';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.phonebook.contacts);
  const filter = useSelector((state) => state.phonebook.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()) ||
    contact.number.includes(filter)
  );

  return (
    <div>
      {filteredContacts.length > 0 && (
        <h2 className={styles.contactTitle}>Contacts</h2>
      )}
      <ul>
        {filteredContacts.map((contact) => (
          <li className={styles.contactInfo} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              className={styles.deleteButton}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))}
         </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;