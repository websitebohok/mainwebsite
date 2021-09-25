import styled from "styled-components"

export const HeaderStyles = styled.header`
  z-index: 3;
  position: sticky;
  left: 0;
  top: 0;
  box-sizing: border-box;
  // width: 100%;
  max-height: 682px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  padding-right: 2.5rem;
  margin: 1.5rem 0 1.5rem 2.5rem;
  background-color: var(--white);
  transition: box-shadow var(--transMed) ease;
  border-right: 1px solid rgba(124, 124, 124, 0.2);

  @media (min-width: 901px) {
    min-width: 240px;
  }

  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
    border-right: none;
    padding: 0;
    margin: 0;

    &.scrolled {
      box-shadow: -1px 5px 11px 0px rgba(0, 0, 0, 0.1);
    }
  }

  .head-cont {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    margin: 0 0 2.5rem;
    width: 100%;
    z-index: 3;

    @media (max-width: 900px) {
      margin: 0;
      padding: 1rem 1.5rem;
      background-color: var(--white);
      border-bottom: 1px solid rgba(124, 124, 124, 0.2);
    }

    a {
      display: flex;
      color: var(--black);
      text-decoration: none;
      position: relative;

      &:hover {
        color: var(--black);
      }

      svg {
        fill: var(--black);
        vertical-align: middle;
        width: 120px;
        height: 28px;

        @media (max-width: 900px) {
          width: 96px;
          height: 22px;
        }
      }
    }

    h2 {
      margin: 0;
      font-size: 1.5rem;

      @media (min-width: 768px) {
        font-size: 1.75rem;
      }
    }
  }
`

export const NavigationStyles = styled.nav`
  @media (max-width: 900px) {
    position: fixed;
    overflow: auto;
    top: 49px;
    left: 0;
    width: 100%;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
    background-color: var(--white);
    padding: 2rem 4rem;
    z-index: 2;
    transform: translateX(-100%);
    transition: var(--transMed);

    &.open {
      transform: translateX(0%);
    }

    ul {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    text-transform: capitalize;
    margin-bottom: 2.5rem;

    li {
      font-family: var(--sansSerif);
      position: relative;
      padding: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: var(--gray);

      a {
        width: 100%;
        font-weight: var(--regularWeight);
        color: var(--gray);
        text-decoration: none;

        &:hover {
          color: var(--black);
        }
      }
    }
  }

  ul.mainMenu {
    flex-flow: column nowrap;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(124, 124, 124, 0.2);

    li {
      height: 2rem;
      font-size: var(--para);
      margin: 0;
      justify-content: center;
      align-items: center;

      &:hover > a {
        padding-left: 1rem;
      }

      a {
        line-height: 2rem;

        &.active {
          color: var(--black);
          font-weight: var(--heavyWeight);
          text-decoration: underline;
        }

        &:hover {
          -webkit-transition: var(--transMed);
          transition: var(--transMed);
          background-color: var(--black);
          color: var(--white);
          font-weight: var(--mediumWeight);
        }
      }

      &:hover > ul,
      ul:hover {
        visibility: visible;
        opacity: 1;
        display: block;
      }
    }
  }

  ul.socialMenu {
    flex-flow: row nowrap;

    li {
      height: 1.375rem;
      font-size: 1.375rem;
      margin: 0;
      margin-right: 1.2rem;

      &:last-child {
        margin: 0;
      }

      a.social-icon {
        height: 100%;

        &:hover > svg,
        svg:hover {
          fill: var(--black);
        }

        svg {
          fill: var(--gray);
        }
      }
    }
  }

  ul.contactMenu,
  ul.creditMenu {
    flex-flow: column nowrap;
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(124, 124, 124, 0.2);

    li {
      font-size: var(--subPara);
      margin: 0 0 0.5rem;

      &:last-child {
        margin: 0;
      }
    }
  }

  ul.creditMenu {
    border: none;
    padding: 0;
    margin: 0;

    li {
      text-transform: none;

      a {
        width: auto;
        height: auto;
      }
    }
  }

  ul.additionalMenu {
    flex-flow: row nowrap;

    li {
      font-size: var(--subPara);
      margin: 0;
      margin-right: 1.5rem;

      &:last-child {
        margin: 0;
      }
    }
  }
`

export const BurgerStyles = styled.button`
  border: none;
  background-color: transparent;
  font-family: var(--sansSerif);
  color: var(--black);
  display: flex;
  align-items: center;
  padding: 0;
  z-index: 3;
  font-size: 1.15rem;

  > div {
    span {
      display: block;
      background-color: var(--gray);
      transition: width 0.2s ease;
      width: 30px;
      height: 3px;
      border-radius: 2px;

      &:nth-child(1) {
        transform: translateY(0px);
        margin-bottom: 6px;
      }

      &:nth-child(3) {
        transform: translateY(0px);
        margin-top: 6px;
      }
    }
  }

  &.open {
    > div {
      span {
        &:nth-child(2) {
          width: 20px;
        }

        &:nth-child(3) {
          width: 10px;
        }
      }
    }
  }

  @media (min-width: 901px) {
    display: none;
  }
`
