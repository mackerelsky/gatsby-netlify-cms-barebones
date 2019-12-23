import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

export const BlogPostTemplate =({content,title}) => (
    <div className="content">
        <h1>{title}</h1>
        <div className="page-content" dangerouslySetInnerHTML={{__html: content}} />
    </div>
)

const BlogPost = ({ data }) => {
    const{ markdownRemark: post } = data
    return (
        <Layout>
            <BlogPostTemplate 
            title={post.frontmatter.title}
            content={post.html}

            />
        </Layout>
    )
}

export default BlogPost

export const blogPostQuery = graphql`
query BlogPost($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      title
    }
  }
}
`