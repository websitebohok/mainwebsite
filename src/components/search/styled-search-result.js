// import styled, { css } from "styled-components"
// import SearchResult from "./search-result"

// const Popover = css`
//   max-height: 80vh;
//   overflow: scroll;
//   -webkit-overflow-scrolling: touch;
//   position: absolute;
//   z-index: 2;
//   left: 0;
//   top: 100%;
//   margin-top: 0.5em;
//   width: 80vw;
//   max-width: 30em;
//   box-shadow: 0 0 5px 0;
//   padding: 1em;
//   border-radius: 2px;
//   background: var(--white);
// `

// export default styled(SearchResult)`
//   display: ${(props) => (props.show ? `block` : `none`)};
//   ${Popover}

//   .HitCount {
//     display: flex;
//     justify-content: flex-end;
//   }

//   .Hits {
//     ul {
//       list-style: none;
//       margin-left: 0;
//       display: flex;
//       flex-flow: column nowrap;
//     }

//     li.ais-Hits-item {
//       margin-bottom: 1em;
//       height: auto;

//       a {
//         color: var(--gray);
//         line-height: 1.4rem;

//         &:hover {
//           background-color: var(--white);
//           color: var(--gray);
//           font-weight: var(--regularWeight);
//         }

//         h6 {
//           margin-bottom: 0.2em;
//           font-size: var(--Para);
//         }

//         span.ais-Snippet {
//           font-size: var(--subPara);
//           line-height: 1.2rem;
//         }
//       }

//       strong.ais-Snippet-highlighted {
//         color: var(--white);
//         background-color: var(--black);
//       }
//     }
//   }

//   .ais-PoweredBy {
//     display: flex;
//     justify-content: flex-end;
//     font-size: 80%;

//     svg {
//       width: 70px;
//     }
//   }
// `
