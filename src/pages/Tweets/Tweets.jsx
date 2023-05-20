import { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { fetchUsers } from '../../services/api';
import { UserCard } from '../../components/UserCard/UserCard';
import { Section, List, LinkHome, ButtonWrap } from './Tweets.styled';
import { Container } from '../../components/Layout/Layout.styled';
import { Button } from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';

const Tweets = () => {
  const [users, setUsers] = useState(() => JSON.parse(localStorage.getItem('users')) ?? []);
  const [page, setPage] = useState(() => JSON.parse(localStorage.getItem('page')) ?? 1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localPage = JSON.parse(localStorage.getItem('page'));
    if (localPage !== page) {
      setLoading(true);
      fetchUsers(page).then(dataUsers => {
        setUsers(prevUsers => [...prevUsers, ...dataUsers]);
        setLoading(false);
      });
    }
  }, [page]);

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

  return (
    <Section>
      <Container>
        <LinkHome to={'/'}>Back</LinkHome>
        <List>
          {users?.map(user => (
            <UserCard key={user.id} onChangeUser={changeLocalUser} {...user} />
          ))}
        </List>
        <ButtonWrap>
          {users.length < 12 && !loading && (
            <Button title="Load More" onClick={handleButtonClick} hover />
          )}
          {users.length < 12 && loading && <Loader />}
        </ButtonWrap>
      </Container>
    </Section>
  );
};

export default Tweets;
