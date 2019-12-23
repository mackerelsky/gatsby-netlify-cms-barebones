/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 * Again, ripped wholesale from the gatsby default starter
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

const Layout = ({ children, language, englishAudio, irishAudio }) => {
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
            <Header siteTitle={data.site.siteMetadata.title}/>
            <main>{children}</main>
            <Footer />
        </>
    )
}


export default Layout