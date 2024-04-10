import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";
// const initialContact = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = window.localStorage.getItem("saved-contact");
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const [inputValue, setInputValue] = useState("");
  const handleChangeSearch = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNewContact = (addNewContact) => {
    setContacts((prevState) => {
      return [...prevState, addNewContact];
    });
  };

  const filterContacts =
    contacts &&
    contacts.filter((contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    );

  const handleDeleteContacts = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm newContact={handleAddNewContact} />
      <SearchBox inputValue={inputValue} onChange={handleChangeSearch} />
      <ContactList
        contacts={filterContacts}
        onDelete={handleDeleteContacts}
        filterValue={inputValue}
      />
    </div>
  );
};

export default App;
