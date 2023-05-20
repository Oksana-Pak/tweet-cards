import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import Logo from '../../images/logo.svg';
// import { updateUser } from '../../services/api';
import { Button } from '../Button/Button';
import { CardItem, LogoWrap, LineWrap, AvatarWrap, AvatarImg, UserList } from './UserCard.styled';

export const UserCard = ({ onChangeUser, ...user }) => {
  const newUser = { ...user };
  const { user: username, tweets, avatar, status, followers } = newUser;

  const handleFollow = () => {
    newUser.status = !status;

    if (newUser.status) {
      newUser.followers = followers + 1;
    } else {
      newUser.followers = followers - 1;
    }
    onChangeUser(newUser);
    // updateUser(newUser);
  };

  return (
    <CardItem>
      <LogoWrap>
        <img src={Logo} alt="logo" />
      </LogoWrap>
      <LineWrap></LineWrap>
      <AvatarWrap>
        {avatar ? (
          <AvatarImg src={avatar} alt={username} />
        ) : (
          <Avatar name={username} round={true} size="62" color={'#5736a3'} />
        )}
      </AvatarWrap>

      <UserList>
        <li>{tweets} tweets</li>
        <li>{followers.toLocaleString()} followers</li>
      </UserList>
      <Button
        title={status ? 'following' : 'follow'}
        onClick={handleFollow}
        following={status}
      ></Button>
    </CardItem>
  );
};

UserCard.propTypes = {
  onChangeUser: PropTypes.func.isRequired,
};
