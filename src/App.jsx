import React from 'react';
import { ContactProvider } from './context/ContactContext';
import ContactList from './views/ContactList.jsx';
import AddContact from './views/AddContact.jsx';

const App = () => {
  return (
    <ContactProvider>
      <div className="container mt-4">
        <h1>Contact List</h1>
        <AddContact />
        <ContactList />
      </div>
    </ContactProvider>
  );
};

export default App;