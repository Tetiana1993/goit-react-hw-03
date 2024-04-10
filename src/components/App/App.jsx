import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";

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

  const handleAddNewContact = (newContact) => {
    setContacts((prevState) => {
      return [...prevState, newContact];
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
      <ContactForm addNewContact={handleAddNewContact} />
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
