import React, { useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import ContactCard from '../components/ContactCard';

const ContactList = () => {
  const { contacts, deleteContact, updateContact } = useContext(ContactContext);

  return (
    <div className="container mt-4">
      {contacts.map(contact => (
        <ContactCard
          key={contact.id}
          contact={contact}
          deleteContact={deleteContact}
          updateContact={updateContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
