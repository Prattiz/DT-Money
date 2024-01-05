import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body{
        background-color: ${props => props.theme['gray-800']};
        color: ${props => props.theme['gray-100']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font: 400 1.4rem Roboto, sans-serif;
    }

    button{
        cursor: pointer;
        border: none;
        background:none;

        &:hover{
            filter: brightness(.9);
            transition: 0.2s;
        }
    }

    ::-webkit-scrollbar {
    width: 1rem;
    background-color: ${props => props.theme['gray-800']};
  }

   ::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme['green-300']};
        border-radius: 99px;
   }
`
