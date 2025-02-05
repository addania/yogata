import React from "react"
import Layout from "../components/layout.js"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"

export default () => (
  <Layout>
    <div style={{ textAlign: "center" }}>
      <Carousel />
      <p>Are you interested in personal trainings?</p>
      <p>
        E-mail me:

          <p style={{ color: "teal" }}><a style={{ backgroundImage: "none", color: "teal" }} onClick="javascript:window.open('mailto:zabacinka@yahoo.com', 'mail');event.preventDefault()" href="mailto:zabacinka@yahoo.com?subject=Yogata Contact Request">zabacinka@yahoo.com </a></p>

      </p>
      <p>
        Follow me on Instagram:{" "}

          <p><a style={{ backgroundImage: "none", color: "teal" }} href="https://instagram.com/_sportsoul">instagram.com/_sportsoul</a></p>

      </p>
      <p>
        Do you enjoy trainings? I would be grateful for donations. Namaste{" "}

          <p style={{ backgroundImage: "none", color: "teal" }}>Send me a message for details</p>

      </p>
    </div>
  </Layout>
)
