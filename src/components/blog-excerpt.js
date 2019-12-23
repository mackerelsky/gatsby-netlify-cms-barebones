import React from "react"
import { Link, useStaticQuery } from "gatsby"


const BlogExcerpt = () => {
    const data = useStaticQuery(graphql`
    query BlogExcerptQuery {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-template"}}}) {
          totalCount
          edges {
            node {
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                }
                excerpt
            }
          }
        }
      }
    `)

    return (
    <div className="blog-excerpts">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} >
              <h3>
                {node.frontmatter.title}{" "}
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </div>
    )
}

export default BlogExcerpt