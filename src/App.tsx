import React from "react";
import "./assets/styles/App.scss";
import Carousel from "./components/carousel";

function App() {
  return (
    <div className="App">
      <p>loop:false | 480*300 | duration:5000</p>
      <Carousel
        loop={false}
        width={480}
        height={300}
        duration={5000}
        style={{ margin: "0 auto" }}
      >
        <div className="_item">1</div>
        <div className="_item">2</div>
        <div className="_item">3</div>
      </Carousel>
      <p>controls:false | 480*300</p>
      <Carousel
        controls={false}
        width={480}
        height={300}
        style={{ margin: "0 auto" }}
      >
        <div className="_item">1</div>
        <div className="_item">2</div>
        <div className="_item">3</div>
      </Carousel>
      <p>autoplay:false | indicator:false | 480*300</p>
      <Carousel
        autoplay={false}
        indicator={false}
        width={480}
        height={300}
        style={{ margin: "0 auto" }}
      >
        <div className="_item">1</div>
        <div className="_item">2</div>
        <div className="_item">3</div>
      </Carousel>
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
