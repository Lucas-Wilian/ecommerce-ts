import styled, { css } from 'styled-components';

import {
  ShareFill,
  HeartFill,
  StarFill,
  CreditCard,
  ArrowDown,
  ShoppingBasket,
} from '../style/icon';
export const Container = styled.div`
  width: 100%;
  height: 480px;
  background: ${({ theme }) => theme.colors.grayLight};
  padding: 0 20px;
  aside {
    padding: 10px 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    span {
      font-weight: bold;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.outline};
    }
  }
`;

export const Product = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  justify-content: space-between;
  height: 420px;
`;

export const ProductItem = styled.div`
  width: 920px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
`;

export const ProductPrice = styled.div`
  width: 340px;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 10px;
`;

export const ContainerInfo = styled.div`
  padding: 10px;
  span {
    cursor: pointer;
    margin-right: 10px;
  }
  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.outline};
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
  }
`;

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  align-items: center;
  justify-content: center;
`;

export const ProductImg = styled.div`
  width: 400px;
  height: 300px;
`;

export const CarrosselImg = styled.div`
  width: 400px;
  height: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  span {
    width: 52px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70px;
      height: 100%;
    }
  }
`;

export const ProductDetail = styled.div`
  width: 100%;
  h3 {
    font-size: 23px;
    font-weight: bold;
    margin: 0;
  }
  h4 {
    width: 95%;
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.outline};
    padding-bottom: 10px;
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const StarAvaliation = styled.div`
  width: 120px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductDescription = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

export const IconStar = styled(StarFill)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.colors.yellow};
  flex-shrink: 0;
`;

export const PricePromotion = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 30px;
  align-items: center;

  h4 {
    margin: 0;
    text-decoration: line-through;
    margin-right: 10px;
    color: ${({ theme }) => theme.colors.outline};
    font-weight: bold;
  }
`;

export const ValuePromotion = styled.div`
  width: 50px;
  height: 100%;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductValue = styled.div`
  width: 100%;
  height: 60px;

  h4 {
    margin: 0;
    font-weight: bold;
    font-size: 28px;
    color: ${({ theme }) => theme.colors.outline};
  }
  span {
    font-weight: bold;
  }
`;

export const SectionCard = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 0.5px solid ${({ theme }) => theme.colors.gray};
  span {
    font-size: 12px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const ProductQunty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;

  span {
    font-size: 14px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.outline};
  }
  p {
    font-size: 12px;
    /* color: ${({ theme }) => theme.colors.outline}; */
  }
`;

export const ProductQntyItem = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 75%;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.grayLight};
  border-radius: 5px;
  margin: 10px 0px;
  h5 {
    font-size: 18px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.outline};
  }
`;

export const ButtonQnty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white};
  width: 40px;
  height: 40px;
  margin: 5px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonConfirm = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.green};
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 400;
`;

const iconsCSS = css`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.blueSecondary};
  flex-shrink: 0;
`;

export const IconHeart = styled(HeartFill)`
  ${iconsCSS}
`;

export const IconShare = styled(ShareFill)`
  ${iconsCSS}
`;

export const IconShopping = styled(ShoppingBasket)`
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
  margin-right: 10px;
`;

export const IconCard = styled(CreditCard)`
  width: 18px;
  height: 18px;
  fill: ${({ theme }) => theme.colors.bluePrimary};
  flex-shrink: 0;
`;
export const IconArrow = styled(ArrowDown)`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
`;
