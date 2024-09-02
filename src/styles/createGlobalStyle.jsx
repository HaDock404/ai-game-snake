import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
    html {
        max-width: 100%;
        overflow-x: hidden;
    }
    body {
        font-family: 'Roboto', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
    }
    
`

function GlobalStyle() {
    return <StyledGlobalStyle/>
}

export default GlobalStyle