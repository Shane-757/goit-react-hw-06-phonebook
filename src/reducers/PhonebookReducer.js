import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter, changeSort } from 'Actions/phonebookActions';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
  sort: 'asc',
};

const phonebookReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addContact, (state, action) => {
      state.contacts.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
    })
    .addCase(changeFilter, (state, action) => {
      state.filter = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.sort = action.payload;
    });
});

export default phonebookReducer;