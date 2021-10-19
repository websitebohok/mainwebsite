import styled, { css } from "styled-components"
import SearchBox from "./search-box"

const open = css`
  width: 10em;
  background: var(--white);
  cursor: text;
  margin-left: -1.6em;
  padding-left: 1.6em;
`

const closed = css`
  width: 0;
  background: transparent;
  cursor: pointer;
  margin-left: -1em;
  padding-left: 1em;
`

export default styled(SearchBox)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;

  .SearchInput {
    outline: none;
    // border: ${({ hasFocus }) => (hasFocus ? "auto" : "none")};
    border: none;
    font-size: 1em;
    transition: 100ms;
    border-radius: 2px;
    color: var(--black);
    ::placeholder {
      color: var(--gray);
    }
    ${({ hasFocus }) => (hasFocus ? open : closed)}
  }

  .SearchIcon {
    width: 1em;
    margin: 0.3em;
    color: var(--gray);
    pointer-events: none;
  }
`
