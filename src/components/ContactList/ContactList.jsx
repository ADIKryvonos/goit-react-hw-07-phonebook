import { IoIosContact } from 'react-icons/io';
import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';

import { deleteContact } from 'redux/contactSlice';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllContact,
  findFilteredContact,
  getFilteredContact,
} from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContact);
  const filter = useSelector(getFilteredContact);

  const ContactsList = findFilteredContact(contacts, filter);

  return (
    <List>
      {ContactsList.map(({ id, name, number }) => (
        <Item key={id}>
          <IoIosContact />
          {name} : {number}
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            <AiFillDelete />
          </Button>
        </Item>
      ))}
    </List>
  );
};
