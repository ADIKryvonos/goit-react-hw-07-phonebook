export const getAllContact = state => state.contacts.contacts;
export const getFilteredContact = state => state.filter.filter;

export const findFilteredContact = (contacts, filter) => {
  if (filter) {
    const name = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return name;
  }
  return contacts;
};
