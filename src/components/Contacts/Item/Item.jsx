import PropTypes from 'prop-types';
import './Item.css';

const ListItem = ({ name, value }) => {
  return (
    <li>
      {name}: {value}
    </li>
  );
};
export default ListItem;

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
