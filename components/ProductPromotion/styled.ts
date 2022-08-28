import styled from 'styled-components';
import { Star, StarFill, StarHalf } from '../style/icon';

export const Container = styled.div`
  width: 200px;
  height: 300px;
  margin-bottom: 10px;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.gray};
`;

export const ValuePromotion = styled.div`
  width: 100%;
  position: relative;
  span {
    position: absolute;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    width: 60px;
    height: 30px;
    right: 5px;
    border-radius: 5px;
    z-index: 1000;
  }
`;

export const ImgProduct = styled.div`
  margin: 10px 0px 10px 0px;
  width: 100%;
  height: auto;
  max-height: 150px;
  min-height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NameProduct = styled.div`
  margin: 0px;
  padding: 0px;
  p {
    margin: 0px;
    padding: 0px;
    font-size: 14px;
    font-weight: 600;
  }
`;

export const IconStar = styled(StarFill)`
  width: 13px;
  height: 13px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.yellow};
  flex-shrink: 0;
`;

export const PromotionProduct = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

export const PriceProduct = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const CardProduct = styled.div``;
