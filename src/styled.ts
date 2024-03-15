import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
   box-sizing: border-box;
   padding: 0;
   margin: 0;
   outline: none;
   border: none;
   list-style: none;
   text-decoration: none;
}

html {
  height: 100%;
  width: 100%;
}

#root {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

body {
  height: 100%;
  width: 100%;
  background-color:  rgb(20, 20, 20);
  color: rgb(224, 226, 229);
}
`;
