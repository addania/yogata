import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"

export default () => (
  <Layout>
    <div style={{ textAlign: "center" }}>
      <h2>Get in Touch</h2>
      <p>with Mia</p>
      <Carousel />
      <p>Are you interested in personal trainings?</p>
      <p>
        E-mail me:
        <code>
          <p>zabacinka@yahoo.com </p>
        </code>
      </p>
      <p>
        Follow me on Instagram:{" "}
        <code>
          <p style={{ textDecoration: "none" }}>instagram.com/_sportsoul</p>
        </code>
      </p>
      <p>
        Do you enjoy trainings? I would be grateful for donations. Namaste{" "}
        <code>
          <p style={{ textDecoration: "none" }}>Send me a message for details</p>
        </code>
      </p>
    </div>
  </Layout>
)
