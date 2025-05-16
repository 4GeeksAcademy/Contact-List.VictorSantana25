import React from 'react';

const DeleteConfirmModal = ({ contactId, deleteContact }) => {
  const handleDelete = () => {
    deleteContact(contactId);
  };

  return (
    <div
      className="modal fade"
      id={`deleteModal-${contactId}`}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby={`deleteModalLabel-${contactId}`}
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id={`deleteModalLabel-${contactId}`}>
              Confirmar Eliminación
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" />
          </div>
          <div className="modal-body">
            ¿Estás seguro de que deseas eliminar este contacto?
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-bs-dismiss="modal">
              Cancelar
            </button>
            <button className="btn btn-danger" onClick={handleDelete} data-bs-dismiss="modal">
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
