import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { createGlobalStyle } from "styled-components"

import Header from "./header"

interface ThemeProps {
  dark?: boolean
}

// This is a sample global style
const GlobalStyle = createGlobalStyle<ThemeProps>`
  html {
  font: 112.5%/1.45em georgia, serif, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}
body {
  margin: 0;
  /* This is an example on how to use theme props */
  color: ${props => (props.dark ? "#fff" : "hsla(0, 0%, 0%, 0.8)")};
  font-family: georgia, serif;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
}
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
`

const Footer = styled.footer`
  margin-top: 2rem;
`

interface LayoutProps {
  children: any
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <Wrapper>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </Wrapper>
    </>
  )
}

export default Layout
