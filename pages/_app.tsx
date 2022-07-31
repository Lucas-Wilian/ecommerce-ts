import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/style/globalstyles';

const theme: DefaultTheme = {
  colors: {
    bluePrimary: '#0086FF ',
    blueSecondary: '#063496',
    outline: '#2F3336',
    yellow: '#E6B30E',
    white: '#fff',
    grayLight: '#D9D9D9',
    gray: '#7A7A7A',
    green: '#04D361 ',
  },
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
