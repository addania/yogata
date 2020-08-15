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
  <Carousel />
  <h3 style={{textAlign: "center"}}>SCHEDULE</h3>
  <p style={{textAlign: "center"}}>🔥Tabata: Mondays at 18:00 CET</p>
  <p style={{textAlign: "center"}}>🌺Yoga: Thursdays at 18:00 CET</p>
  <h3 style={{textAlign: "center"}}>CLASS DETAILS</h3>
  <p style={{textAlign: "center"}}>Link: https://meet.jit.si/fitwithmia</p>
  <p style={{textAlign: "center"}}>Password: fitwithmia</p>
  <h3 style={{textAlign: "center"}}>ALL TRAININGS</h3>
  <p style={{textAlign: "center", fontSize:"15px", color: "grey"}}>{data.allMarkdownRemark.totalCount} Posts</p>
  
  <table style={{textAlign: "justify", textJustify: "inter-word"}}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              {/*<th>Trainer</th>*/}
              <th>Preview</th>
              
            </tr>
          </thead>
          <tbody> 
            {data.allMarkdownRemark.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.date}</td>
                <Link to={node.fields.slug} style={{backgroundImage: "none"}}>
                <td style={{color: "teal"}}>{node.frontmatter.title.split(" ")[0]}</td>
                </Link>
                {/*<td>{node.frontmatter.trainer}</td>*/}
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