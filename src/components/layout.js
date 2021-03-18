import React from "react"
import Header from './header'
import Footer from './footer'
import Helmet from 'react-helmet'
import {Global, css} from '@emotion/react'
import useSeo from '../hooks/use-seo'

const Layout = (props) => {
  const seo = useSeo();
 const { siteName, fallbackSeo: { description, title } } = seo;
  return(
    <>
      <Global 
        styles={css`
          /* apply a natural box layout model to all elements, but allowing components to change */
          html {
            box-sizing: border-box;
          }
          *, *:before, *:after {
            box-sizing: inherit;
          }
          html {
            font-size: 62.5%;
            font-family: 'Roboto', serif;
          }
          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
          }
          h1, h2, h3 {
            margin: 0;
            line-height: 1.5;
          }
          h1, h2 {
            font-family: 'Roboto', serif;
          }
          h3 {
            font-family: 'PT Sans', sans-serif;
          }
          h1 {
            margin: 0 !important;
          }
          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }
        `}
      />
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet"  href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
      </Helmet>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  )
}


export default Layout
