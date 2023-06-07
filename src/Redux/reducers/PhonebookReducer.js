import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter, changeSort } from 'Redux/Actions/phonebookActions';

const initialState = {
  contacts: [],
  filter: "",
  sort: ""
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



