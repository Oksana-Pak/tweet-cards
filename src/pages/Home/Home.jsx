import { Container } from '../../components/Layout/Layout.styled';
import { Section, TitleWrap, Title, SubTitle, LinkStyled } from './Home.styled';

export const Home = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <Title>Welcome</Title>
          <SubTitle>to the aplication "Tweet Cards"</SubTitle>
          <LinkStyled to={'/tweets'}>Here you can find tweet cards</LinkStyled>
        </TitleWrap>
      </Container>
    </Section>
  );
};
