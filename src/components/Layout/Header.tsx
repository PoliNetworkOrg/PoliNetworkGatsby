import * as React from 'react'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'

interface HeaderProps {
  siteTitle: string
  pageTitle: string
}

const TopBar = styled.header`
  top: 0;
  width: 100%;
  /* position: fixed; */
  border-bottom: 1px solid #bdc1c6;
  z-index: 15;
  background-color: var(--tabbackground);
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  height: 50px;
  font-weight: 200;
  font-size: 1.2em;
`

const CenterTitle = styled.div`
  text-align: center;
  vertical-align: middle;
  grid-column: 2;
  display: flex;
`

const TitleP = styled.p`
  vertical-align: middle;
  display: flex;
  gap: 10px;
  margin: auto;
`

const Toggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = ({ siteTitle, pageTitle }: HeaderProps) => (
  <TopBar>
    <CenterTitle>
      <TitleP>
        <b>{siteTitle}</b>
        <span>-</span>
        <span>{pageTitle}</span>
      </TitleP>
    </CenterTitle>
    <Toggle>
      <ThemeToggle />
    </Toggle>
  </TopBar>
)

export default Header
