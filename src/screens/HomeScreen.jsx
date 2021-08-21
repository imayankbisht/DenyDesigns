import "./HomeScreen.css";
import { Carousel } from "react-bootstrap";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";

export default function HomeScreens() {
  return (
    <>
      <div className="homescreens">
        <Navbar />
        <div className="homescreen_outer">
          <div className="homescreen_inner">
            <h3>Back to School</h3> <h3>Bedding Combos</h3>
            <p>Winning mixes of bedding, pillow shams</p>
            <p>and throw pillows.</p>
            <h1>Shop Now</h1>
          </div>
        </div>
        <Carousel indicators={false} touch={false} controls={false} fade={true}>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid"
              src="https://images.unsplash.com/photo-1551215717-8bc8cfe833ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <hr />
      <Footer />
    </>
  );
}
