import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"
import { BackgroundVideo } from "../components/video.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { ReactComponent as ReactLogo } from "./logo.svg"

export default ({ data }) => {
  console.log(data)
  return (
    <div>
      {/*<BackgroundVideo />
//<div className="content">
//<Layout className="content">*/}
      <Layout>
        <Carousel />
        <h3 style={{ textAlign: "center" }}>CLASSES</h3>
        <div className="row" style={{ margin: "0" }}>
          <div className="col-6" style={{ padding: "0 20px 0 0" }}>
            <img src="https://i.imgur.com/iOw2mwe.jpg?1" />
            <p style={{ textAlign: "center",backgroundColor: "rgba(0,0,0, 0.7)", color:"white", padding: "20px 0 20px 0" }}>
              🔥TABATA: Mondays at 18:00 CET
            </p>
          </div>
          <div className="col-6" style={{ padding: "0 0 0 20px" }}>
            <img src="https://i.imgur.com/kSnbEOJ.jpg?1" />
            <p style={{ textAlign: "center", backgroundColor: "rgba(0,0,0, 0.7)", color:"white", padding: "20px 0 20px 0" }}>
              🌺YOGA: Thursdays at 18:00 CET
            </p>
          </div>

          {/*<img className="col-6" src="https://i.imgur.com/WDUP5Gv.jpg?1" style={{}}/>*/}
        </div>
        <h3 style={{ textAlign: "center" }}>DETAILS</h3>
        <p style={{ textAlign: "center" }}>
          Link: https://meet.jit.si/fitwithmia
        </p>
        <p style={{ textAlign: "center" }}>Password: fitwithmia</p>
        <h3 style={{ textAlign: "center" }}>ALL TRAININGS</h3>
        <p style={{ textAlign: "center", fontSize: "15px", color: "grey" }}>
          {data.allMarkdownRemark.totalCount} Posts
        </p>

        <table style={{ textAlign: "justify", textJustify: "inter-word" }}>
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
                <Link to={node.fields.slug} style={{ backgroundImage: "none" }}>
                  <td style={{ color: "teal" }}>
                    {node.frontmatter.title.split(" ")[0]}
                  </td>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
const removeTrainerFromExcerpt = string => {
  return string.replace(/(with Mia )|(with Tony )/, "")
}
