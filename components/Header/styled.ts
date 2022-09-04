import styled, { css } from 'styled-components';
import {
  Ghost,
  HeartFill,
  ShoppingBasket,
  UserAlt,
  Search,
} from '../style/icon';

export const Container = styled.div`
  width: 100%;
  height: 110px;
  padding: 8px 25px 0 25px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.bluePrimary};
  border-bottom: solid 5px ${({ theme }) => theme.colors.yellow};
`;

export const Menu = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  flex-direction: row;
`;

export const Logo = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
  flex-direction: column;

  p {
    height: 10px;
    font-weight: bold;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

export const Grid = styled.div`
  margin: 10px 0 15px 0;
  display: flex;
  width: 100%;
  height: 40px;
`;
export const SearchInput = styled.div`
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 5px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  input {
    border: none;
    outline: none;
    width: 95%;
    height: 100%;
    background: none;
    font-size: 14px;
    padding-left: 5px;
    color: ${({ theme }) => theme.colors.outline};
  }
`;

export const User = styled.div`
  display: flex;
  height: 100%;
  div {
    display: flex;
    width: 150px;
    align-items: center;
    justify-content: space-evenly;
    p {
      font-size: 13px;
      font-weight: 600;
    }
  }
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 50px;
    height: 100%;

    p {
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.blueSecondary};
      color: ${({ theme }) => theme.colors.white};
      position: absolute;
      bottom: 14px;
      left: 30px;
      width: 20px;
      height: 22px;
      font-size: 13px;
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
  }
`;

const iconsCSS = css`
  width: 23px;
  height: 23px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
  /* &:hover {
    fill: var(--text);
  }
  &.active {
    fill: var(--blue-primary);
  } */
`;

export const IconLogo = styled(Ghost)`
  width: 40px;
  height: 40px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.yellow};
  flex-shrink: 0;
`;

export const IconLogin = styled(UserAlt)`
  ${iconsCSS}
`;

export const IconShopping = styled(ShoppingBasket)`
  width: 30px;
  height: 30px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
`;

export const IconHeart = styled(HeartFill)`
  ${iconsCSS}
`;

export const IcontSearch = styled(Search)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  fill: ${({ theme }) => theme.colors.yellow};
  flex-shrink: 0;
`;

export const SubMenu = styled.div`
  height: 100%;
  width: 60%;
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;
  span {
    font-weight: bold;
    font-size: 14px;
  }
`;
