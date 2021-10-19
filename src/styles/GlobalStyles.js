import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --regularWeight: 400;
    --mediumWeight: 500;
    --boldWeight: 700;
    --heavyWeight: 900;
    --transMed: 0.1s;
    --transSlow: 0.3s;
    --black: #2B2B2B;
    --gray: #757575;
    --lightgray: #c5c5c5;
    --white: #FFFDFD;
    --blue: #3457D5;
    --lightblue: #D4DCFF;
    --serif: Lora, serif;
    --sansSerif: Roboto, sans-serif;
    --monospace: "Roboto Mono", monospace;
    --displayFont: "DM Serif Display";
    --h1: 3rem;
    --h2: 2.4rem;
    --h3: 2rem;
    --h4: 1.5rem;
    --h5: 1.25rem;
    --h6: 1.125rem;
    --footerMenuItem: 0.85rem;
    --xlPara: 1.25rem;
    --lPara: 1.125rem;
    --para: 1rem;
    --subPara: 0.85rem;
    --spacing: 1rem;
  }

  body {
    font-family: var(--serif);
    color: var(--black);
    font-size: var(--para);
    margin: 0;
    background-color: var(--white);
  }

  body > div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    // padding: 0 5%;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-flow: row nowrap;
    max-width: 1280px;
    width: 100%;
    position: relative;
    background-color: var(--white);

    @media (max-width: 900px) {
      flex-flow: column nowrap;
    }
  }

  .main-body {
   box-sizing: border-box;
   display: flex;
   flex-flow: column nowrap;
   justify-content: flex-start;
   align-items: flex-start;
   margin: 1.5rem 2.5rem;
   width: calc(100% - 2 * 2.5rem);
   overflow-wrap: break-word;

   @media (max-width: 375px) {
     margin: 1.5rem 1.5rem;
     width: calc(100% - 2 * 1.5rem);
   }
  }

  .hr-img {
    margin-bottom: 2rem;
    // width:  100%;
  }

  // featuredImage
  .gatsby-image-wrapper {

    img {
      max-height: 600px;
    }
  }

  a {
    // color: var(--gray);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }

    &:hover {
      color: var(--black);
    }
  }



  .btn {
    color: var(--black);
    text-decoration: none;
    border: none;
    background: none;
    font-family: var(--serif);
    padding: 0;
    font-size: 1rem;
    display: inline-block;
    line-height: 30px;
    position: relative;

    &-link {
      border: none;
      background-color: transparent;
      font-size: var(--h6);
      padding: 1rem 1.25rem;
      display: flex;
      font-family: var(--serif);
      color: var(--charcoal);
      text-decoration: none;
      position: relative;

      &:after {
        content: "";
        display: block;
        position: absolute;
        height: 0.1rem;
        width: 100%;
        background-color: var(--charcoal);
        left: 0;
        bottom: -0.25rem;
        opacity: 1;
        transition: opacity var(--transMed);
      }

      &:hover,
      &:focus {
        cursor: pointer;

        &:after {
          opacity: 0.15;
        }
      }

      &:visited {
        text-decoration: none;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }

  .br-line {
    width: 100%;
    border-bottom: 2px solid var(--black);
    opacity: 0.2;
    margin: 2rem 0;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }
  .sr-only-focusable:focus,
  .sr-only-focusable:active {
    clip: auto !important;
    -webkit-clip-path: none !important;
    clip-path: none !important;
    height: auto !important;
    margin: auto !important;
    overflow: visible !important;
    width: auto !important;
    white-space: normal !important;
  }
`

export default GlobalStyles
