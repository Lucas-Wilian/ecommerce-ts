import styled, { css } from 'styled-components';

import { ShareFill, HeartFill, StarFill } from '../style/icon';
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
