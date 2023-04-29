import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { Wrapper } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <ul>
        {friends.map(friend => {
          return (
            <FriendListItem
              key={friend.id}
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          );
        })}
      </ul>
    </Wrapper>
  );
};

FriendList.propTypes = {
  friend: PropTypes.string.isRequired,
};
