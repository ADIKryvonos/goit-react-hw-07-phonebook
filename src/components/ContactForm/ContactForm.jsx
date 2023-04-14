import { Formik } from 'formik';
import * as Yup from 'yup';
import { Form, Field, ErrorMessage, Label, Button } from './ContactForm.styled';

import React from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

const schema = Yup.object().shape({
  name: Yup.string().required(),
  number: Yup.number().required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        dispatch(addContact(...values));
        resetForm();
      }}
    >
      <Form>
        <Label htmlFor="name">
          Name
          <Field
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage component="div" name="name" />
        </Label>
        <Label htmlFor="number">
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage component="div" name="name" />
        </Label>

        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  );
};

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
