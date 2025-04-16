import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';
import ContactList from '../../components/ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';
import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .catch((e) => {
        toast.error('Sorry, we were unable to access your contact list..');
        console.log(e);
      });
  }, [dispatch]);

  return (
    <div className={styles.contactsPage}>
      <h1>Contacts book</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
