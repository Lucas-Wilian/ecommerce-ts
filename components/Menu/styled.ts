import styled from 'styled-components';
import { Bars } from '../style/icon';

export const Container = styled.div`
  width: 60%;
  height: 40px;
  display: flex;
  flex-direction: row;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  margin-left: 30px;
  span {
    color: ${({ theme }) => theme.colors.bluePrimary};
    font-size: 14px;
    font-weight: 500;
  }
`;

export const IconBars = styled(Bars)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.bluePrimary};
  flex-shrink: 0;
`;
