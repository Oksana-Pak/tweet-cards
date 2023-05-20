import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import Logo from '../../images/logo.svg';
import { Button } from '../Button/Button';
import { CardItem, LogoWrap, LineWrap, AvatarWrap, AvatarImg, UserList } from './UserCard.styled';

export const UserCard = ({ onChangeUser, ...user }) => {
  const userCopy = { ...user };
  const { user: username, tweets, avatar, status, followers } = userCopy;

  const handleFollow = () => {
    userCopy.status = !status;

    if (userCopy.status) {
      userCopy.followers = followers + 1;
    } else {
      userCopy.followers = followers - 1;
    }

    onChangeUser(userCopy);
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
