import React from "react"
import Layout from "../components/layout.js"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"
import { BackgroundVideo } from "../components/video.js"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import { ReactComponent as ReactLogo } from "./logo.svg"
import { isMobile } from "../utils/device.js"

const TrainingButton = ({ classType, imageUrl, icon, setFilter }) => (
  <div
    className="col-6"
    style={{
      padding: "0 20px 0 0",
      position: "relative",
      cursor: "pointer",
    }}
    onClick={() => setFilter(classType)}
  >
    <img
      src={imageUrl}
      style={{ position: "relative", width: "360px", height: "360px" }}
    />
    <div
      style={{
        position: "absolute",
        top: "40px",
        left: "0",
        width: "90%",
      }}
    >
      <p
        style={{
          backgroundColor: "rgba(0,0,0, 0.7)",
          color: "white",
          padding: "20px 0 20px 10px",
          width: "100%",
        }}
      >
        {`${isMobile() ? "" : icon + " "}${classType.toUpperCase()}`}
      </p>
    </div>
  </div>
)

const classes = [
  {
    classType: "tabata",
    imageUrl: "https://i.imgur.com/iOw2mwe.jpg?1",
    icon: "🔥",
  },
  {
    classType: "yoga",
    imageUrl: "https://i.imgur.com/kSnbEOJ.jpg?1",
    icon: "🌺",
  },
  {
    classType: "physio",
    imageUrl: "https://i.imgur.com/BndkCI3.jpg",
    icon: "🌊",
  },
  {
    classType: "endurance",
    imageUrl: "https://i.imgur.com/fPe8BLx.jpg",
    icon: "🍁",
  },
  {
    classType: "all",
    imageUrl: "https://i.imgur.com/w0dGyEa.jpg",
    icon: "🔥🌺🌊🍁",
  },
]

export default ({ data }) => {
  console.log(data)
  const [filter, setFilter] = React.useState("")
  const filteredData = data.allMarkdownRemark.edges.filter(n => {
    return n.node.frontmatter.title.toLowerCase().includes(filter)
  })

  return (
    <div>
      {/*<BackgroundVideo />
//<div className="content">
//<Layout className="content">*/}
      <Layout>
        <Carousel />
        <h3 style={{ textAlign: "center" }}>CLASSES</h3>
        <div className="row" style={{ margin: "0" }}>
          {/*<div
            className="col-6"
            style={{
              padding: "0 20px 0 0",
              position: "relative",
              cursor: "pointer",
            }}
            onClick={() => setFilter("tabata")}
          >
            <img
              src="https://i.imgur.com/iOw2mwe.jpg?1"
              style={{ position: "relative" }}
            />
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "0",
                width: "90%",
              }}
            >
              <p
                style={{
                  backgroundColor: "rgba(0,0,0, 0.7)",
                  color: "white",
                  padding: "20px 0 20px 10px",
                  width: "100%",
                }}
              >
                {`${isMobile() ? "" : "🔥 "}TABATA`}
              </p>
            </div>
          </div>
          <div
            className="col-6"
            style={{ padding: "0 0 0 20px", cursor: "pointer" }}
            onClick={() => setFilter("yoga")}
          >
            <img src="https://i.imgur.com/kSnbEOJ.jpg?1" />
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "20px",
                width: "90%",
              }}
            >
              <p
                style={{
                  backgroundColor: "rgba(0,0,0, 0.7)",
                  color: "white",
                  padding: "20px 0 20px 10px",
                }}
              >
                {`${isMobile() ? "" : "🌺 "}YOGA`}
              </p>
            </div>
          </div>
          <div
            className="col-6"
            style={{ padding: "0 0 0 0px", cursor: "pointer" }}
            onClick={() => setFilter("physio")}
          >
            <img
              src="https://i.imgur.com/BndkCI3.jpg"
              style={{
                width: "360px",
                height: "360px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "0",
                width: "90%",
              }}
            >
              <p
                style={{
                  backgroundColor: "rgba(0,0,0, 0.7)",
                  color: "white",
                  padding: "20px 0 20px 10px",
                }}
              >
                {`${isMobile() ? "" : "🌊 "}PHYSIO`}
              </p>
            </div>
          </div>
          <div
            className="col-6"
            style={{ padding: "0 0 0 20px", cursor: "pointer" }}
            onClick={() => setFilter("endurance")}
          >
            <img
              src="https://i.imgur.com/fPe8BLx.jpg"
              style={{
                width: "360px",
                height: "360px",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "20px",
                width: "90%",
              }}
            >
              <p
                style={{
                  backgroundColor: "rgba(0,0,0, 0.7)",
                  color: "white",
                  padding: "20px 0 20px 10px",
                }}
              >
                {`${isMobile() ? "" : "🍁 "}ENDURANCE`}
              </p>
            </div>
          </div>

          <div
            className="col-6"
            style={{ padding: "0 20px 0 0", cursor: "pointer" }}
            onClick={() => setFilter("")}
          >
            <img src="https://i.imgur.com/w0dGyEa.jpg" />
            <div
              style={{
                position: "absolute",
                top: "40px",
                left: "0px",
                width: "90%",
              }}
            >
              <p
                style={{
                  backgroundColor: "rgba(0,0,0, 0.7)",
                  color: "white",
                  padding: "20px 0 20px 10px",
                }}
              >
                {`${isMobile() ? "" : "🔥🌺🌊🍁 "}ALL`}
              </p>
            </div>
          </div>*/}
          {classes.map(item => (
            <TrainingButton
              classType={item.classType}
              imageUrl={item.imageUrl}
              icon={item.icon}
              setFilter={setFilter}
            />
          ))}
          {/*<img className="col-6" src="https://i.imgur.com/WDUP5Gv.jpg?1" style={{}}/>*/}
        </div>
        {/*<h3 style={{ textAlign: "center" }}>DETAILS</h3>
        <p style={{ textAlign: "center" }}>
          Link: https://meet.jit.si/fitwithmia
        </p>
        <p style={{ textAlign: "center" }}>Password: fitwithmia</p>*/}
        <h3 style={{ textAlign: "center" }}>ALL TRAININGS</h3>
        <p style={{ textAlign: "center", fontSize: "15px", color: "grey" }}>
          {filteredData.length} Posts
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
            {filteredData.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.frontmatter.date}</td>
                <td>
                  <Link
                    to={node.fields.slug}
                    style={{ backgroundImage: "none", color: "teal" }}
                  >
                    {node.frontmatter.title.split(" ")[0]}
                  </Link>
                </td>
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
