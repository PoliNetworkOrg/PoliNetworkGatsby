import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './Header'

interface CssVarsProps {
  dark?: boolean
}

function CssVars({ dark }: CssVarsProps) {
  const Component = !dark
    ? createGlobalStyle`
html {
  --tabbackground: #ffffff;
  --mainbackground: #f1f3f4;
  --maintext: #5f6368;
  --accenttext: #5f6368;
  --colortitle: #202124;
  --colordarktext: var(--maintext);
  --border: 0px;
  --borderfooter: 1px solid #bdc1c6;
  --sidetab1width: 60%;
  --sidetab2width: 35%;
  --sidetab3width: 47.5%;
  --shadow: 0 1px 2px 0 rgba(60, 64, 67, .3),0 2px 6px 2px rgba(60, 64, 67, .15);
  --shadowwebkit: 0 1px 2px 0 rgba(60, 64, 67, .3),0 2px 6px 2px rgba(60, 64, 67, .15);
  --borderbottom: 0px;
  --linkcolor: coral;
  --calcagnocolor: #121212;
  --calcagnotesto: white;
  --whiteclickable: #d8d8d8;
  --whitehover: #bebebe;
  --accent: #0b5394;
  --accenthover: #0b4880;
  --accent1: #6bb4f8ff;
  --accent1hover: #5d9dd9;
  --accent2: #f4c32b;
  --highlight: #1156ae;
  --searchHover: #dddddd;
  --materialsbackground: #FFFFFF;
  --assocButtonColor: #FFFFFF;
  --assocButtonHover: #FFFFFF;
  --displayLightToggle: none;
  --displayNightToggle: flex;
  --bugColor: #FFFFFF;
}
`
    : createGlobalStyle`
html {
  --tabbackground: #171717;
  --mainbackground: #121212;
  --maintext: #c4c4c4;
  --accenttext: #121212;
  --colortitle: white;
  --colordarktext: #57a3ea;
  --border: 1px solid white;
  --borderfooter: 1px solid white;
  --sidetab1width: calc(60% - 2px);
  --sidetab2width: calc(35% - 2px);
  --sidetab3width: calc(47.5% - 2px);
  --shadow: 0;
  --shadowwebkit: 0;
  --borderbottom: solid 1px white;
  --linkcolor: #03DDCB;
  --calcagnocolor: #f1f3f4;
  --calcagnotesto: #121212;
  --whiteclickable: #1d1d1d;
  --whitehover: #1f1f1f;
  --accent: #EEDCB8;
  --accenthover: #E6D0A6;
  --accent1: #4B8C7D;
  --accent1hover: #3F7468;
  --accent2: #BB86FC;
  --accent2hover: #BB8600;
  --highlight: #1156ae;
  --searchHover: #545454;
  --materialsbackground: #161616;
  --assocButtonColor: #EFEFEF;
  --assocButtonHover: #D7D7D7;
  --displayNightToggle: none;
  --displayLightToggle: flex;
  --bugColor: #161616;
}
`

  return <Component />
}

// This is a sample global style
const GlobalStyle = createGlobalStyle`
html {
  font: 112.5%/1.45em georgia, serif, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}
body {
  margin: 0;
  /* This is an example on how to use theme props */
  color: var(--maintext);
  background-color: var(--mainbackground);
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
      <CssVars dark={true} />
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
