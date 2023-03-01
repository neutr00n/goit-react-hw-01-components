import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem/FriendListItem';
import { FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      <FriendListItem friends={friends} />
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
