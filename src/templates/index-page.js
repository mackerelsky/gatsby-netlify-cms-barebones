import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const IndexPageTemplate =({content,title}) => (
    <div className="content">
        <h1>{title}</h1>
        <div className="page-content" dangerouslySetInnerHTML={{__html: content}} />
    </div>
)

const IndexPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate 
            title={frontmatter.title}
            content={frontmatter.html}
            />
        </Layout>
    )
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
    html
    frontmatter {
      title
    }
  }
}
`