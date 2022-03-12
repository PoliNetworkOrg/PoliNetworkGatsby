import * as React from 'react'
import { GatsbyBrowser } from 'gatsby'
import Layout from '../components/Layout/Layout'
import '../components/Layout/globalStyles.css'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
  props,
}) => {
  return <Layout {...props}>{element}</Layout>
}
