// import s from './FriendListItem.module.css';
import { ListItem, Status, Name, Image } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ListItem>
      <Status active={isOnline === true}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
};
