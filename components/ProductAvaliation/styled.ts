import styled, { css } from 'styled-components';
import { StarFill } from '../style/icon';

export const Container = styled.div`
  width: 98%;
  margin: 20px 10px;
  background: ${({ theme }) => theme.colors.white};
  height: 200px;
  border-radius: 5px;
  box-shadow: 8px 4px 8px ${({ theme }) => theme.colors.gray};
  h2 {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.outline};
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.grayLight};
  }
  section {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContainerAvaliation = styled.div`
  width: 280px;
  height: 130px;
  padding: 0px 10px;
  p {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Avaliation = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.outline};
`;

export const ButtonAvaliation = styled.button`
  border: none;
  width: 270px;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.blueSecondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

export const AvaliationUser = styled.div`
  width: 500px;

  ul {
    list-style: none;
    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      span {
        font-weight: bold;
        font-size: 18px;
        margin-right: 10px;
      }
    }
  }
`;

export const Bar = styled.div`
  width: 60%;
  height: 10px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.yellow};
`;

export const IconStar = styled(StarFill)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.yellow};
  flex-shrink: 0;
  margin-right: 10px;
`;
