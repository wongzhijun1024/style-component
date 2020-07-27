import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    .App{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    body{
        margin:0;
        border:0;
        padding:0
    }
`;
