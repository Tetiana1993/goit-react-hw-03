import css from "../Contact/Contact.module.css";

const Contact = ({ contact, contactDelete }) => {
  const { name, number, id } = contact;

  const deleteContact = () => {
    contactDelete(id);
  };
  return (
    <>
      <ul className={css["contact-info"]}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button type="button" onClick={deleteContact}>
        Delete
      </button>
    </>
  );
};

export default Contact;
