import styled from "styled-components"

export const IndexPageStyle = styled.div`
  display: flex;
  flex-flow: column nowrap;

  .hr-img {
    position: relative;

    img {
      width: 100%;
      height: 301px;
      object-fit: cover;
    }

    @media (max-width: 900px) {
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      max-width: 100vw;
      position: relative;
      right: 50%;
      width: 100vw;
      margin-top: -1.5rem;
    }

    .hr-title {
      padding: 3rem 4rem;
      position: absolute;
      box-sizing: border-box;
      transform: translate(0%, -100%);
      width: 100%;

      @media (max-width: 762px) {
        padding: 2rem 1.5rem;
      }

      h1,
      p {
        color: var(--white);
        margin: 0;
      }

      h1 {
        line-height: 3rem;
      }

      p {
        margin-left: 0.25rem;
      }
    }
  }

  div.hp-posts-roll {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1.5rem;

    @media (max-width: 560px) {
      flex-flow: column nowrap;
    }

    .posts-roll {
      margin-bottom: 1rem;
      flex: 1 1 20rem;
    }
  }

  div.st-line {
    width: 10rem;
    border-bottom: 2px solid var(--black);
  }
`
