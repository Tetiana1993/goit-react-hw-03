import Contact from "../Contact/Contact";
import css from "../ContactList/ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul className={css.contList}>
      {contacts.map((contact) => {
        const { id } = contact;
        return (
          <li key={id}>
            <Contact
              contact={contact}
              contId={id}
              contacts={contacts}
              contactDelete={onDelete}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
