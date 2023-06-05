import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const addContact = createAction('phonebook/addContact', (name, number) => ({
  payload: { id: nanoid(), name, number },
}));
export const deleteContact = createAction('phonebook/deleteContact');
export const changeFilter = createAction('phonebook/changeFilter');
export const changeSort = createAction('phonebook/changeSort');