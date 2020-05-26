import React from "react";
import Layout from "../components/layout.js";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo.js";
import { Carousel } from "../components/carousel.js";
import { BackgroundVideo } from "../components/video.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";

export default ( {data} ) => {
  console.log(data)
return (
<div>
{/*<BackgroundVideo />
//<div className="content">
//<Layout className="content">*/}
 <Layout>
  <h2 style={{textAlign: "center"}}>Sport Adventures</h2>
  <p style={{textAlign: "center"}}>Our next online training will be yoga on Wednesday where we will train towards a beautiful Bird of Paradise pose!</p>
  <Carousel />
  
  <h3 style={{textAlign: "center"}}>ALL ARTICLES</h3>
  <p style={{textAlign: "center", fontSize:"15px", color: "grey"}}>{data.allMarkdownRemark.totalCount} Posts</p>
  
  <table style={{textAlign: "justify", textJustify: "inter-word"}}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Trainer</th>
              <th>Excerpt</th>
              
            </tr>
          </thead>
          <tbody> 
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.date}</td>
                <Link to={node.fields.slug}>
                <td style={{color: "teal"}}>{node.frontmatter.title}</td>
                </Link>
                <td>{node.frontmatter.trainer}</td>
                <td>{removeTrainerFromExcerpt(node.excerpt)}</td>
                
              </tr>
            ))}
          </tbody>
        </table>

</Layout>
{/*</div>*/}
</div>
)
}

export const query = graphql` 
  query {
    allMarkdownRemark (sort: {fields:[frontmatter___date], order:DESC}) {
      edges {
        node {
          id
          excerpt
          rawMarkdownBody
          frontmatter {
            date
            title
            trainer
          }
          fields {
            slug
          }
          timeToRead
          html
        }
      }
      totalCount
    }
    }
  ` 
  const removeTrainerFromExcerpt = (string) => {
    return string.replace(/(with Mia )|(with Tony )/, "")
  }