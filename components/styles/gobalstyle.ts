import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  }
  
  :root {
    --blue-primary: #0086FF ;
    --blue-secondary: #063496;
    --outline: #2F3336;
    --yellow: #E6B30E;
    --white: #fff; 
    --gray-light: #D9D9D9;
    --gray: #7A7A7A;
    --green:#04D361 ;
    
  }
`;
