import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = () => {
  const contactArray = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);

  const showContactArray = !filterValue
    ? contactArray
    : contactArray.filter((contact) =>
        contact.name.toLowerCase().includes(filterValue.toLowerCase())
      );

  return (
    <div className={styles.contactList}>
      {showContactArray.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default ContactList;
