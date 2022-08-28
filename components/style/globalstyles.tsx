import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  .swiper-button-prev, .swiper-rtl {
    left: 6px;
    right: auto;
    background: ${({ theme }) => theme.colors.white};
    border-radius: 100%;
    width: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  } 
   .swiper-button-prev:hover,
   .swiper-button-next:hover
   {
    background: ${({ theme }) => theme.colors.grayLight};
    cursor: pointer;
   }
  .swiper-button-prev:after, .swiper-rtl  {
    content: 'prev';
    font-size: 20px;
  }
  .swiper-button-next{
      background: ${({ theme }) => theme.colors.white};
      border-radius: 100%;
      width: 50px;
      /* font-size: 19px; */
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }
  .swiper-button-next:after{
    content: 'next';
    font-size: 20px;
  }
`;

export default GlobalStyle;
