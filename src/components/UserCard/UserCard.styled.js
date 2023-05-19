import styled from 'styled-components';

import Background from '../../images/background.png';
import Background2 from '../../images/background@2x.png';

export const CardItem = styled.li`
  width: 380px;
  height: 460px;
  overflow: hidden;
  background: linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const LogoWrap = styled.div`
  height: 214px;
  padding: 20px;
  background-repeat: no-repeat;
  background-size: 308px 168px;
  background-image: url('${Background}');
  background-position: 50% 50%;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${Background2}');
  }
`;

export const LineWrap = styled.div`
  width: 380px;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3,
    inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const AvatarWrap = styled.div`
  margin: -40px auto 0;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const AvatarImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: #5736a3;
`;

export const UserList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 22px auto 26px;

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  color: #ebd8ff;
`;
