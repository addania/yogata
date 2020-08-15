import React from "react"
import Layout from "../components/layout.js"
import Header from "../components/header.js"
import { graphql } from "gatsby"
import SEO from "../components/seo.js"
import { Carousel } from "../components/carousel.js"

export default ({ data }) => (
  <Layout>
    <h2 style={{ textAlign: "center" }}>
      About {data.site.siteMetadata.title}
    </h2>
    <p style={{ textAlign: "center" }}>with Mia</p>
    <Carousel />
    <p style={{ textAlign: "justify", textJustify: "inter-word" }}>
      <blockquote>
        I cannot feel happier than when I am doing sports. Movement tastes like
        freedom.
      </blockquote>
      <br />
      My entire life has been dedicated to sports. Since very childhood. As my
      grandma used to say to my mum: 
      <br />
      <br />
      <blockquote>This girl has so much energy! Put her to
      some sport club.</blockquote>
      <br />
      And so she did :)
      <br />
      <br />
      9 years of my life I dedicated to dancing: social dances, modern dances, jazz, folk..., you name it :) With multiple
      national, international and world championships in my repertoire. For 2 years I was part of university club of sport aerobics. 
      <br />
      <br />
      When I discovered yoga I fell in love with it immediatelly and decided to
      go beyond regular classes and went for a life-changing trip to Bali to
      study and become certified yoga trainer.
      <br />
      <br />
      Apart from that I am grateful to be part of a wonderful
      sports group in Vienna where bunch of dedicated souls exercise together where
      I got the opportunity to train the group and gather the teaching
      experiences.
      <br />
      <br />
      And here I am now. Loving sports as never and offering you to share my
      passion for movement during my online classe of Yoga and Tabata. I hope you benefit from it
      and enjoy. See ya on the classes.
      <br />
      <br />
      <blockquote>Join my trainings and let's get fit together!</blockquote>
    </p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
