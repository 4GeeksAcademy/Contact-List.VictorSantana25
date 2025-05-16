import React, { useState } from 'react';
import { FaTrash, FaEdit } from "react-icons/fa";
import EditContactModal from './EditContactModal';
import DeleteConfirmModal from './DeleteConfirmModal';

const ContactCard = ({ contact, deleteContact, updateContact }) => {
  const [formData, setFormData] = useState({
    name: contact.name,
    email: contact.email,
    phone: contact.phone,
    address: contact.address
  });

  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{contact.name}</h5>
          <p className="card-text">{contact.address}</p>
          <p className="card-text">{contact.phone}</p>
          <p className="card-text">{contact.email}</p>
        </div>

        <div className="text-end">
          {/* Botón Editar */}
          <button
            type="button"
            className="btn btn-light d-flex flex-column align-items-center mb-2 px-3"
            data-bs-toggle="modal"
            data-bs-target={`#editModal-${contact.id}`}
          >
            <FaEdit size={20} />
            <span>Editar</span>
          </button>

          {/* Botón Eliminar */}
          <button
            type="button"
            className="btn btn-danger d-flex flex-column align-items-center px-2"
            data-bs-toggle="modal"
            data-bs-target={`#deleteModal-${contact.id}`}
          >
            <FaTrash size={15} />
            <span>Eliminar</span>
          </button>
        </div>
      </div>

      <EditContactModal
        contact={contact}
        formData={formData}
        setFormData={setFormData}
        updateContact={updateContact}
      />

      <DeleteConfirmModal
        contactId={contact.id}
        deleteContact={deleteContact}
      />
    </div>
  );
};

export default ContactCard;