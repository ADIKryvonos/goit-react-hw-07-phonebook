import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.contacts;
export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;
export const selectFilterContact = state => state.filter;

export const findFilteredContact = createSelector(
  [selectContact, selectFilterContact],
  (contacts, filter) => {
    if (filter) {
      const name = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
      return name;
    }
    return contacts;
  }
);
