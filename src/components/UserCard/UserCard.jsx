import { useState, useEffect } from 'react';
import Avatar from 'react-avatar';

import Logo from '../../images/logo.svg';
import { Button } from '../Button/Button';
import { CardItem, LogoWrap, LineWrap, AvatarWrap, AvatarImg, UserList } from './UserCard.styled';

export const UserCard = user => {
  const { id, user: username, tweets, avatar, followers } = user;

  const [following, setFollowing] = useState(
    () => JSON.parse(localStorage.getItem(username))?.following ?? false
  );
  const [followersNum, setFollowers] = useState(
    () => JSON.parse(localStorage.getItem(username))?.followersNum ?? followers
  );

  useEffect(() => {
    localStorage.setItem(username, JSON.stringify({ following, followersNum }));
  }, [username, following, followersNum]);

  const handleFollow = () => {
    if (following) {
      setFollowing(false);
      setFollowers(followersNum - 1);
    } else {
      setFollowing(true);
      setFollowers(followersNum + 1);
    }
  };

  return (
    <CardItem key={id}>
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
        <li>{followersNum.toLocaleString()} followers</li>
      </UserList>
      <Button
        title={following ? 'following' : 'follow'}
        onClick={handleFollow}
        following={following}
      ></Button>
    </CardItem>
  );
};
