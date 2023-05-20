import { Container } from '../../components/Layout/Layout.styled';
import { Section, TitleWrap, Title, SubTitle, LinkStyled } from './Home.styled';

export const Home = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <Title>Welcome</Title>
          <SubTitle>
            to the website where you can find tweet cards and follow famous people
          </SubTitle>
          <LinkStyled to={'/tweets'}>Here you can find tweet cards</LinkStyled>
        </TitleWrap>
      </Container>
    </Section>
  );
};
