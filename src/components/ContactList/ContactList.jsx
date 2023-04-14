import { IoIosContact } from 'react-icons/io';
import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { AiFillDelete } from 'react-icons/ai';

import { deleteContact } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { findFilteredContact } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(findFilteredContact);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
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
