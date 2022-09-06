import styled from 'styled-components';

export const Container = styled.div`
  width: 98%;
  margin: 0px 10px;
  background: ${({ theme }) => theme.colors.white};
  min-height: 120px;
  max-height: auto;
  border-radius: 5px;
  box-shadow: 8px 4px 8px ${({ theme }) => theme.colors.gray};
  h2 {
    font-size: 25px;
    margin-bottom: 0;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.outline};
    border-bottom: 0.5px solid ${({ theme }) => theme.colors.grayLight};
  }
`;

export const ProductInfo = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.outline};
  padding: 10px;
`;
