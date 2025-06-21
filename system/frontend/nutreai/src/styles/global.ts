import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: "Mukta Vaani", sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body:not(.elementor-editor-active) .elementor-widget-menu-anchor {
   position: relative;
   z-index: -1;
 }
 body:not(.elementor-editor-active) .elementor-menu-anchor:before {
   content: "";
   display: block;
   height: 100px;
   margin: -100px 0 0;
   visibility: hidden;
   pointer-events: none;
 }
`