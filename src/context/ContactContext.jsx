import React, { createContext, useState, useEffect } from 'react';

export const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const agendaSlug = "miscontactos"; 

  useEffect(() => {
    const checkAndCreateAgenda = async () => {
      try {
        // Verificar si la agenda existe
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}`);
        
        if (!response.ok) {
          console.log(`La agenda "${agendaSlug}" no existe. Creándola...`);

          const createResponse = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug: agendaSlug }) 
          });

          if (!createResponse.ok) {
            throw new Error("Error al crear la agenda.", Error);
          }

          console.log(`Agenda "${agendaSlug}" creada exitosamente.`);
        }

        const contactsResponse = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`);
        
        if (contactsResponse.ok) {
          const data = await contactsResponse.json();
          setContacts(data.contacts);
        } else {
          console.error("No se pudieron obtener los contactos.");
        }
      } catch (error) {
        console.error("Error manejando la agenda:", error);
      }
    };

    checkAndCreateAgenda();
  }, []);

  // Método para agregar contacto
  const addContact = async (contact) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        const newContact = await response.json();
        setContacts([...contacts, newContact]);
      } else {
        console.error("Error al agregar contacto.");
      }
    } catch (error) {
      console.error("Error al agregar contacto:", error);
    }
  };

  //Método para actualizar contacto
  const updateContact = async (updatedContact) => {
  try {
    const response = await fetch(
        `https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${updatedContact.id}`, // 
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      console.error("Error al actualizar contacto:", errorMessage);
      return;
    }

    const updatedData = await response.json();
    setContacts(prevContacts =>
      prevContacts.map(contact =>
        contact.id === updatedData.id ? updatedData : contact
      )
    );

    console.log("Contacto actualizado exitosamente:", updatedData);
  } catch (error) {
    console.error("Error en la solicitud de actualización:", error);
  }
};

  // Método para eliminar contacto con confirmación
  const deleteContact = async (id) => {
    try {
      const response = await fetch(`https://playground.4geeks.com/contact/agendas/${agendaSlug}/contacts/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setContacts(contacts.filter(contact => contact.id !== id));
      } else {
        console.error("Error al eliminar contacto.");
      }
    } catch (error) {
      console.error("Error al eliminar contacto:", error);
    }
  };

  return (
    <ContactContext.Provider value={{ contacts, addContact, updateContact, deleteContact }}>
      {children}
    </ContactContext.Provider>
  );
};