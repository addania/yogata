import React from "react"
import "./carousel.css"
import pic1 from "./img/pic1.jpg"
import pic2 from "./img/pic2.jpg"
import pic3 from "./img/pic3.jpg"
import pic4 from "./img/pic4.jpg"
import pic5 from "./img/pic5.jpg"
import pic6 from "./img/pic6.jpg"
import pic7 from "./img/pic7.jpg"
import pic8 from "./img/pic8.jpg"
import pic9 from "./img/pic9.jpg"
import pic10 from "./img/pic10.jpg"
import pic11 from "./img/pic11.jpg"
import pic12 from "./img/pic12.jpg"
import pic13 from "./img/pic13.jpg"
import pic14 from "./img/pic14.jpg"
import pic15 from "./img/pic15.jpg"
import pic16 from "./img/pic16.jpg"
import { isMobile } from "react-device-detect"

const imageArray = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5,
  pic6,
  pic7,
  pic8,
  pic9,
  pic10,
  pic11,
  pic12,
  pic13,
  pic14,
  pic15,
  pic16,
]

export class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentPic: Math.floor(Math.random() * (imageArray.length - 1)),
    }

    this.interval = null

    this.nextPic = this.nextPic.bind(this)
  }

  nextPic() {
    let next = Math.floor(Math.random() * (imageArray.length - 1))
    this.setState({ currentPic: next })
  }

  componentDidMount() {
    this.interval = setInterval(this.nextPic, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    let src = imageArray[this.state.currentPic]
    return (
      <div style={{ position: "relative" }}>
        <img
          src={src}
          alt=""
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "100%",
          }}
        />
        <div
          className="label moveLabel1"
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            backgroundColor: "rgba(0,0,0, 0.7)",
          }}
        >
          <p
            style={{
              color: "white",
              margin: "20px 20px 0px 20px",
              fontSize: "38px",
              lineHeight: "38px",
            }}
          >
            SPORT ADVENTURES
          </p>
          {!isMobile && (
            <p style={{ color: "white", margin: "20px" }}>
              Welcome to my free online trainings
            </p>
          )}
        </div>
        {!isMobile && (
          <div
            className="label moveLabel2"
            style={{
              position: "absolute",
              bottom: "40px",
              right: "0",
              backgroundColor: "rgba(0,0,0, 0.7)",
            }}
          >
            <p style={{ color: "white", margin: "20px" }}>
              Join Yoga & Tabata classes
            </p>
          </div>
        )}
      </div>
    )
  }
}
