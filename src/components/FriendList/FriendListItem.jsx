import PropTypes from 'prop-types';
import './FriendList.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      {isOnline ? (
        <span className="status" style={{ color: 'green' }}>
          online
        </span>
      ) : (
        <span className="status" style={{ color: 'red' }}>
          offline
        </span>
      )}

      <img
        className="frient-avatar"
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className="frien-name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
