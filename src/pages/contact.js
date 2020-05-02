import React from "react";
import Layout from "../components/layout.js";
import { graphql } from "gatsby";
import SEO from "../components/seo.js";
import { Carousel } from "../components/carousel.js";

export default () => 

<Layout>
  <div style={{textAlign: "center"}}>
  <h2>Get in Touch</h2>
  <Carousel/>
  <p>Do you want to join our Sports Group? Contact us at: <code>zabacinka@yahoo.com</code></p>
  </div>
</Layout>
