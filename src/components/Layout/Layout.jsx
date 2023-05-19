import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { Nav, Container, NavItem } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Nav>
        <Container>
          <nav>
            <NavItem to="/" end>
              Home
            </NavItem>
            <NavItem to="tweets">Tweets</NavItem>
          </nav>
        </Container>
      </Nav>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <ToastContainer />
    </>
  );
};
