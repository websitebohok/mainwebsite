import styled from "styled-components"

export const BlogPostStyles = styled.div`
  width: 80%;
  // max-width: 656px;
  // white-space: pre-wrap; /* Since CSS 2.1 */
  // white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
  // white-space: -pre-wrap; /* Opera 4-6 */
  // white-space: -o-pre-wrap; /* Opera 7 */
  // word-wrap: break-word; /* Internet Explorer 5.5+ */
  overflow-wrap: break-word;

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  .post-img {
    margin: calc(var(--spacing) * 2) 0;
  }

  a {
    text-decoration: underline;
    color: var(--black);

    &:hover,
    &:focus {
      cursor: pointer;
      text-decoration: none;
    }
  }

  div.post-roll {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    article {
      flex: 1 0 45%;

      @media (max-width: 600px) {
        flex: 1 0 100%;
      }

      a {
        text-decoration: none;
      }
    }
  }
`
