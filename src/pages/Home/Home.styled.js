import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 50px 0;
`;

export const TitleWrap = styled.div`
  max-width: 768px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  gap: 50px;
  opacity: 0.7;
`;
export const Title = styled.h1`
  font-size: 72px;
`;
export const SubTitle = styled.h2`
  font-size: 42px;
`;

export const LinkStyled = styled(Link)`
  font-size: 26px;
  &:hover {
    color: #5736a3;
  }
`;
