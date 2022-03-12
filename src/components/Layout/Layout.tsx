import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import Header from './Header'

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
