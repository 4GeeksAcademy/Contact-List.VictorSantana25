import React from 'react';

const EditContactModal = ({ contact, formData, setFormData, updateContact }) => {
  const handleEdit = async () => {
    const updated = {
      ...formData,
      agenda_slug: "miscontactos",
      id: contact.id
    };
    await updateContact(updated);

    // Cerrar modal con Bootstrap JS
    const modalEl = document.getElementById(`editModal-${contact.id}`);
    const modalInstance = bootstrap.Modal.getInstance(modalEl);
    modalInstance.hide();
  };

  return (
    <div
      className="modal fade"
      id={`editModal-${contact.id}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby={`editModalLabel-${contact.id}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id={`editModalLabel-${contact.id}`}>
              Editar Contacto
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <input
              type="email"
              className="form-control mb-2"
              placeholder="Correo"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Teléfono"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Dirección"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button type="button" className="btn btn-primary" onClick={handleEdit}>
              Guardar Cambios
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditContactModal;
