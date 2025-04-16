import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  const contactDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.contactContainer}>
      <div>
        <div className={styles.contactName}>
          <FaUser /> {name}
        </div>
        <div className={styles.contactPhone}>
          <FaPhone className={styles.contactPhoneIcon} /> {number}
        </div>
      </div>
      <button
        onClick={() => {
          contactDelete(id);
        }}
        style={{ marginLeft: 'auto' }}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
