import { useSelector } from 'react-redux';
import {
  selectFilteredContacts,
  selectLoading,
} from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
  const showContactArray = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      <div className={styles.contactList}>
        {showContactArray.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
      {isLoading && <p className={styles.loader}>Data loading...</p>}
    </>
  );
};

export default ContactList;
