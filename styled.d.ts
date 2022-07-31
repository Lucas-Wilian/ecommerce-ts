import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      bluePrimary: string;
      blueSecondary: string;
      outline: string;
      yellow: string;
      white: string;
      grayLight: string;
      gray: string;
      green: string;
    };
  }
}
