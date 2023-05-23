import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Loader } from '../Loader/Loader';
import { Nav, Container, NavItem, Main, Footer } from './Layout.styled';

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
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>
        <p>© 2023 Tweet Cards - Test task. Created by Oksana Pak</p>
      </Footer>
      <ToastContainer />
    </>
  );
};
