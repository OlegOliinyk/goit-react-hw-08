import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
const ContactList = ({ contactArray, contactDelete }) => {
  return (
    <div className={styles.contactList}>
      {contactArray.map((contact) => (
        <Contact
          key={contact.id}
          contact={contact}
          contactDelete={contactDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
