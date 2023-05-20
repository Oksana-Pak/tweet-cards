import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 20px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  margin-bottom: 30px;
`;

export const LinkHome = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  margin-bottom: 20px;
  padding: 5px 15px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  border: none;
  cursor: pointer;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.22;
  color: #373737;
  &:hover {
    background: #5cd3a8;
  }
`;

export const ButtonWrap = styled.div`
  position: relative;
  height: 50px;
`;
