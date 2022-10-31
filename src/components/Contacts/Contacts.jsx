import './Contacts.css';

const ContactList = ({ arr }) => {
  return (
    <ul>
      {arr.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
