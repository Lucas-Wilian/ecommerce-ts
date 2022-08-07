import styled from 'styled-components';

export const Container = styled.div`
  width: 200px;
  height: 300px;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.gray};
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const ValuePromotion = styled.div`
  width: 100%;
  height: 28px;
  background: ${({ theme }) => theme.colors.green};
  span {
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 600;
    height: 100%;
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

export const NameProduct = styled.div``;

export const IconStar = styled.div``;

export const PromotionProduct = styled.div``;

export const PriceProduct = styled.div``;

export const CardProduct = styled.div``;
