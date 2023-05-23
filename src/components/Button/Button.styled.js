import styled from 'styled-components';

export const ButtonStyled = styled.button`
  display: block;
  width: 196px;
  height: 50px;
  margin: 0 auto;
  padding: 14px 28px;

  background: ${p => (p.following ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: none;

  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  text-transform: uppercase;

  color: #373737;
  ${p =>
    p.hover
      ? `&:hover {
    background: #5cd3a8;
  }`
      : null}
  ${p =>
    p.hover && !p.following
      ? `&:hover {
    background: #5cd3a8;
  }`
      : `&:hover {
    background: #ebd8ff;
  }`}
`;
