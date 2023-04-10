import React from 'react';
import { Label, Input } from './Filter.styled';

import { filterContacts } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Label htmlFor="text">
      Find contacts by name
      <Input
        name="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
      ></Input>
    </Label>
  );
};
