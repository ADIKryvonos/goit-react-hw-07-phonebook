import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.contacts;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilterContact = state => state.filter;

export const findFilteredContact = createSelector(
  [selectContact, selectFilterContact],
  (contacts, filter) => {
    if (filter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    }
    return contacts;
  }
);
