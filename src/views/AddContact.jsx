import React, { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';

const AddContact = () => {
  const { addContact } = useContext(ContactContext);
  const [contact, setContact] = useState({
    name: '',
    address: '',
    phone: '',
    email: ''
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(contact); // Esperamos que la API responda antes de resetear
    setContact({ name: '', address: '', phone: '', email: '' }); // Limpiar los campos después de añadir
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <div className="mb-3">
        <label>Nombre</label>
        <input type="text" name="name" className="form-control" value={contact.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Dirección</label>
        <input type="text" name="address" className="form-control" value={contact.address} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Teléfono</label>
        <input type="text" name="phone" className="form-control" value={contact.phone} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input type="email" name="email" className="form-control" value={contact.email} onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-success">Añadir Contacto</button>
    </form>
  );
};

export default AddContact;