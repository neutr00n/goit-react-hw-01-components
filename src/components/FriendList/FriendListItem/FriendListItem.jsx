import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatus,
  FriendImg,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, name, isOnline, id }) => (
    <FriendItem key={id}>
      <FriendStatus status={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt={`${name} avatar`} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  ));
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
