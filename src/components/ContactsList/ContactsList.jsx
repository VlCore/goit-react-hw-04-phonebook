import { Contact } from "./Contact/Contact";
import { Component } from "react";
import PropTypes from 'prop-types';
import { List } from "./ContactsList.styled";

export class ContactsList extends Component {
    render() {
      const { contacts, removeContact } = this.props;
  
      return (
        <List>
          {contacts.length === 0 ? (
            <li>
              <h3>Sorry, but the list is empty!</h3>
            </li>
          ) : (
            contacts.map(contact => (
              <Contact
                contact={contact}
                removeContact={removeContact}
                key={contact.id}
              />
            ))
          )}
        </List>
      );
    }
  }

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            number: PropTypes.string,
            name: PropTypes.string,
            id: PropTypes.string,
        })
    ),
    removeContact: PropTypes.func.isRequired,
    searchTerm: PropTypes.string,
};
