import { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { fetchUsers } from '../../services/api';
import { UserCard } from '../../components/UserCard/UserCard';
import { Section, List, LinkHome, ButtonWrap } from './Tweets.styled';
import { Container } from '../../components/Layout/Layout.styled';
import { Button } from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
import { FilterSelector } from '../../components/FilterSelector/FilterSelector';
import { fetchFilteredUsers } from '../../services/api';
import { errorMessage } from '../../services/notifications';

const Tweets = () => {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) ?? []);
  const [page, setPage] = useState(() => JSON.parse(localStorage.getItem('page')) ?? 1);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status === null || status === 'showAll') {
      const localPage = JSON.parse(localStorage.getItem('page'));
      if (localPage !== page) {
        setLoading(true);
        fetchUsers(page).then(dataUsers => {
          setUsers(prevUsers => [...prevUsers, ...dataUsers]);
          setLoading(false);
        });
      }
    }
  }, [page, status]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('page', JSON.stringify(page));
  }, [users, page]);

  const handleButtonClick = () => {
    setPage(prevState => prevState + 1);
    const scroll = Scroll.animateScroll;
    scroll.scrollMore(500, { duration: 1000 });
  };

  const changeLocalUser = newUser => {
    const updatedUsers = users.map(user => (newUser.id === user.id ? newUser : user));
    setUsers(updatedUsers);
  };

  const changeFilterUser = (status, value) => {
    setStatus(status);
    setLoading(true);
    setPage(5);
    setUsers([]);

    fetchFilteredUsers(value).then(dataUsers => {
      if (!dataUsers.length) {
        errorMessage(`There are no ${status} cards`);
      }
      setUsers(prevUsers => [...prevUsers, ...dataUsers]);
      setLoading(false);
    });
  };

  const onSelectChange = status => {
    switch (status) {
      case 'showAll':
        setUsers([]);
        setPage(1);
        setStatus('showAll');
        break;

      case 'follow':
        changeFilterUser('follow', false);
        break;

      case 'followings':
        changeFilterUser('followings', true);
        break;

      default:
        return null;
    }
  };

  return (
    <Section>
      <Container>
        <LinkHome to={'/'}>Back</LinkHome>
        <FilterSelector onSelectChange={onSelectChange} />
        <List>
          {users?.map(userData => (
            <UserCard key={userData.id} onChangeUser={changeLocalUser} {...userData} />
          ))}
        </List>
        <ButtonWrap>
          {users.length < 12 &&
            !loading &&
            (status === null || status === 'showAll') &&
            page < 5 && <Button title="Load More" onClick={handleButtonClick} hover />}
          {users.length < 12 && loading && <Loader />}
        </ButtonWrap>
      </Container>
    </Section>
  );
};

export default Tweets;
