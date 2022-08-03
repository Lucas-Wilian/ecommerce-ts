import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background: ${({ theme }) => theme.colors.bluePrimary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      color: ${({ theme }) => theme.colors.white};
      font-size: 18px;
      margin: 0;
    }
    span {
      font-size: 14px;
      text-align: center;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Inputs = styled.aside`
  width: 950px;
  height: 100%;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  input {
    width: 43%;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 5px;
    font-weight: bold;
    padding-left: 10px;
  }
`;

export const ButtonInput = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.blueSecondary};
  color: ${({ theme }) => theme.colors.white};
  width: 110px;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  font-weight: bold;
`;
