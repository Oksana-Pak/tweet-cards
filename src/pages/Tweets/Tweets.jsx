import { useState, useEffect } from 'react';
import * as Scroll from 'react-scroll';
import { fetchUsers } from '../../services/api';
import { UserCard } from '../../components/UserCard/UserCard';
import { Section, List, LinkHome, ButtonWrap } from './Tweets.styled';
import { Container } from '../../components/Layout/Layout.styled';
import { Button } from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers(page).then(dataUsers => {
      setUsers(prevUsers => [...prevUsers, ...dataUsers]);
      setLoading(false);
    });
  }, [page]);

  const handleButtonClick = () => {
    setPage(prevState => prevState + 1);
    const scroll = Scroll.animateScroll;
    scroll.scrollMore(500, { duration: 1000 });
  };

  return (
    <Section>
      <Container>
        <LinkHome to={'/'}>Back</LinkHome>
        <List>
          {users?.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </List>
        <ButtonWrap>
          {users.length <= 12 && !loading && (
            <Button title="Load More" onClick={handleButtonClick} hover />
          )}
          {users.length <= 12 && loading && <Loader />}
        </ButtonWrap>
      </Container>
    </Section>
  );
};

export default Tweets;
