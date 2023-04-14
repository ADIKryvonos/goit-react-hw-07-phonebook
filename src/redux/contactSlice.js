import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const statusPending = state => {
  state.isLoading = true;
};

const statusRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  // reducers: {
  //   addContact(state, action) {
  //     const chekContact = state.contacts.find(
  //       contact => contact.name === action.payload.name
  //     );
  //     if (chekContact) {
  //       return alert(chekContact.name + ' is already in contact');
  //     }
  //     state.contacts = [...state.contacts, action.payload];
  //   },
  //   deleteContact(state, action) {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload
  //     );
  //   },
  // },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, statusPending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, statusRejected)
      .addCase(addContact.pending, statusPending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const chekContact = state.contacts.contacts.find(
          contact => contact.name === action.payload.name
        );
        if (chekContact) {
          return alert(chekContact.name + ' is already in contact');
        }
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, statusRejected)
      .addCase(deleteContact.pending, statusPending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, statusRejected),
});

export const contactReducer = contactSlice.reducer;
