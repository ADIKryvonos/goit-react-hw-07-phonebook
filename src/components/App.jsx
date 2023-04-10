import React from 'react';
import { Wrap } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Section } from './Section/Section';

export function App() {
  return (
    <Wrap>
      <Section title={'Phonebook'}>
        <ContactForm />
        <Filter />
        <ContactList />
      </Section>
    </Wrap>
  );
}
