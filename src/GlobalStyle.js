import { createGlobalStyle } from "styled-components";

export const GlobalSytle = createGlobalStyle`

  :root{
    --post-blue: #70b5f9;
    --post-green: #7fc15e;
    --post-amber: #e7a33e;
    --post-red: #fc9295;
  }

  * {
    margin: 0;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

`;
