import { createGlobalStyle } from "styled-components"
import "@fontsource/lora"
import "@fontsource/roboto/900.css"
import "@fontsource/roboto/900-italic.css"
import "@fontsource/roboto/700.css"
import "@fontsource/roboto/700-italic.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/500-italic.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/400-italic.css"
import "@fontsource/roboto-mono"
import "@fontsource/dm-serif-display"
// import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap')

const Typography = createGlobalStyle`
h1 {
  font-family: var(--displayFont);
  font-weight: var(--regularWeight);
  font-size: var(--h1);
  margin: 0 0 calc(var(--spacing) * 2);
}

p {
  margin: calc(var(--spacing) * 0.75) 0;
  font-size: var(--para);
  font-family: var(--sansSerif);
  line-height: 1.5;
  color: var(--gray);

  &.subPara {
    font-size: var(--subPara);
  }
}

.blog-post-content {
  p {
    font-weight: 400;
    font-family: var(--serif);
    font-size: 1rem;
    line-height: 1.625;
    color: var(--black);
  }
}

h2,
h3,
h4, 
h5,
h6
 {
  font-family: var(--sansSerif);
  font-weight: 900;
}

h2,
h3,
h4 {
  letter-spacing: 0px;
}

h5,
h6 {
  letter-spacing: 0px;
}

blockquote,
table,
ol,
ul,
.gatsby-resp-image-wrapper {
  margin: calc(var(--spacing)) 0;
}

h1,
h2,
h3,
h4 {
  color: var(--black);
}

h2, h3, h4 {

  margin: calc(var(--spacing) * 1.5) 0;
}

h2 {
  font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5,
h6 {
  color: var(--black);
  margin: var(--spacing) 0;
}

h5 {
  font-size: var(--h5);
}

h6 {
  font-size: var(--h6);
}

blockquote {
  padding: var(--spacing) calc(var(--spacing) * 2);
  background-color: var(--white);
  width: 100%;
  font-family: var(--serif);
  font-style: italic;
  box-sizing: border-box;

  p {
    font-size: var(--lPara) !important;
    color: var(--gray) !important;
    margin: 0 !important;
  }
}

hr {
  width: 20%;
  border-bottom: 1px solid var(--gray);
  opacity: 0.2;
  margin: calc(var(--spacing) * 2) auto;
}

ul,
ol {
  padding-left: var(--spacing);
  font-size: var(--para);
  li {
    padding-left: calc(var(--spacing) / 2);
    margin: var(--spacing) 0;

    &::marker {
      font-size: 0.75rem;
      color: var(--primaryColor);
    }
  }

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    padding-left: calc(var(--spacing) * 2);

    li {
      padding-left: var(--spacing);
    }
  }
}

pre {
  margin: 2rem 0;
  padding: 1rem;
  // border-radius: 0.25rem;
  background-color: rgba(0, 0, 0, 0.03);
  white-space: pre-wrap;       /* Since CSS 2.1 */
  white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
  white-space: -pre-wrap;      /* Opera 4-6 */
  white-space: -o-pre-wrap;    /* Opera 7 */
  word-wrap: break-word;       /* Internet Explorer 5.5+ */
  word-break: break-all;

  code {
    font-family: var(--monospace);
    object-fit: contain;
  }

  span {
    font-family: var(--monospace);
    object-fit: contain;
    margin-top: 1.5rem;
    display: inline-block;

    &:first-child {
      margin: 0;
    }
  }
}

table {
  font-size: var(--subPara);
  thead {
    color: var(--white);
    font-weight: var(--boldWeight);
    background-color: var(--gray);
  }

  th,
  td {
    text-align: left;
    font-family: var(--sansSerif);
    // font-weight: 400;
    padding: var(--spacing);
    border-right: 1px solid var(--gray);
    border-bottom: 1px solid var(--gray);

    @media (max-width: 480px) {
      padding: calc(var(--spacing)/2);
    }

  }
  
  tr {
    > *:last-child {
      border-right: none;
    }

  }
  
  tbody {
    background-color: var(--white);
    
    > *:last-child {
      td {
        border-bottom: none;
      }
    }
  }
}

.gatsby-resp-image-figure {
  margin: 2rem 0;
}

.gatsby-resp-image-wrapper {
  // max-height: 400px !important;
  margin: 1rem;
  // width: 100% !important;

  .gatsby-resp-image-link {
    object-fit: contain;

    .gatsby-resp-image-background-image {
      object-fit: contain;
      max-height: 400px;
      padding: 0;
    }
  
    .gatsby-resp-image-image {
      object-fit: contain;
      // max-height: 400px;
    }
  }
}

.gatsby-resp-image-figcaption, .img-title {
  text-align: center;
  font-family: var(--sansSerif);
  color: var(--gray);
}

.img-title {
  margin: 1rem 0;
}
`

export default Typography
