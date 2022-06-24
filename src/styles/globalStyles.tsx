import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root{
    --color-blue: #00448D;
    --color-red:#a6062d;
    --color-dark: #2d345b;
    --color-tmax-blue: #07458b;
    --color-tmax-dark-blue: #2c345c;
    --color-tmax-red: #e30818;
    --color-tmax-light-gray: #e9e9eb;
  }

  html{
    overflow-x: hidden;
    font-size: 16px;
  }

  html:before {
    content: '';
    position: fixed;
    width: 100%;
    height: 999px;
    top: -999px;
    background-color: white;
  }
  
  html:after{
    content: '';
    position: fixed;
    width: 100%;
    height: 999px;
    bottom: -999px;
    background-color: white;
  }

  body{
    font-family: 'Noto Sans KR', sans-serif;
    overflow-x: hidden;
    letter-spacing: -0.8px;
  }

  a{
    text-decoration : none;
    color: var(--color-dark);
  }

  button{
    border:none;
    outline:none;
  }

  h2{
    font-size: 40px;
    @media only screen and (max-width: 800px) {    
      font-size: 36px;
    }

    @media only screen and (max-width: 600px) {
      font-size: 32px;
    }
  }
  p{
    font-size: 16px;
    line-height: 32px;
    
    @media only screen and (max-width: 600px) {
      font-size: 14px;
      line-height: 28px;
	  }
    
    @media only screen and (max-width: 400px) {
      font-size: 13px;
      line-height: 26px;
	  }
    
  }
  input, select{
    background-color: white;
  }
  div{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
