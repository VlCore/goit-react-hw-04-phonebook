export const filterContacts = (contacts, searchTerm) => {
    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};