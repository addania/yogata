import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to} style={{ backgroundImage: "none", color: "teal" }}>
      {props.children}
    </Link>
  </li>
)

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author
          }
        }
      }
    `
  )
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem`, paddingTop: "20px" }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          {/*<h3 style={{ display: `inline`, fontSize:"1rem" }}>{data.site.siteMetadata.author}</h3>*/}
          {/*<img src="https://i.imgur.com/jZrFbML.png" style={{width:"60px"}}/>*/}
          {/* <img src="https://i.imgur.com/hCRXTmA.png" style={{width:"60px"}}/>*/}
          {/*<img src="https://i.imgur.com/8VMTI6J.png" style={{width:"60px", color: "teal"}}/>*/}
          {/*<img src="https://i.imgur.com/STVY8eY.png" style={{width:"50px", color: "teal"}}/>*/}
          {/*<img src="https://i.imgur.com/YoEA22c.png" style={{width:"50px", color: "teal"}}/>*/}
          {/*  <img src="https://i.imgur.com/gJXzd1W.png" style={{width:"50px", color: "teal"}}/>*/}
          <img
            src="https://i.imgur.com/w2YLl90.png"
            style={{ width: "50px", color: "teal" }}
          />
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>
      </header>
      {children}

      <hr />
      <footer style={{ paddingBottom: "20px" }}>
        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            marginBottom: "0",
            color: "grey",
          }}
        >
          © 2024 Design and Development by {data.site.siteMetadata.author}
        </p>
      </footer>
    </div>
  )
}
