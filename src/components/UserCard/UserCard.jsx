import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import Logo from '../../images/logo.svg';
import { updateUser } from '../../services/api';
import { Button } from '../Button/Button';
import { CardItem, LogoWrap, LineWrap, AvatarWrap, AvatarImg, UserList } from './UserCard.styled';

export const UserCard = ({ onChangeUser, ...userData }) => {
  const { user, tweets, avatar, status, followers } = userData;
  const newUser = { ...userData };

  const handleFollow = () => {
    newUser.status = !status;
    newUser.status ? (newUser.followers = followers + 1) : (newUser.followers = followers - 1);

    onChangeUser(newUser);
    updateUser(newUser);
  };

  return (
    <CardItem>
      <LogoWrap>
        <img src={Logo} alt="logo" />
      </LogoWrap>
      <LineWrap></LineWrap>
      <AvatarWrap>
        {avatar ? (
          <AvatarImg src={avatar} alt={user} />
        ) : (
          <Avatar name={user} round={true} size="62" color={'#5736a3'} />
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
