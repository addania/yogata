import React from "react";
import pic1 from "./img/pic1.jpg";
import pic2 from "./img/pic2.jpg";
import pic3 from "./img/pic3.jpg";
import pic4 from "./img/pic4.jpg";
import pic5 from "./img/pic5.jpg";

const imageArray = [
  pic1,
  pic2,
  pic3,
  pic4,
  pic5
];

export class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentPic: Math.floor(Math.random()*4) };

    this.interval = null;

    this.nextPic = this.nextPic.bind(this);
  }

  nextPic() {
    let next = Math.floor(Math.random()*4);
    this.setState({ currentPic: next });
  }

  componentDidMount() {
    this.interval = setInterval(this.nextPic, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let src = imageArray[this.state.currentPic];
    return (
        <img src={src} alt="" style={{display: "block", marginLeft: "auto", marginRight:"auto", width: "100%"}}/>
    );
  }
}