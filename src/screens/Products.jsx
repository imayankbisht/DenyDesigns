import { useHistory, Link } from "react-router-dom";
import { ImageData } from "../data";
import Navbar from "../components/Navbar";
import { Checkout } from "./Checkout";
import "./Products.css";

export function Products() {
  const history = useHistory();
  return (
    <>
      <Navbar />
      <div className="products">
        {ImageData.map((e) => (
          <div
            onClick={() =>
              history.push({
                pathname: "/checkout",
                state: { image: e.image }
              })
            }
            className="product_frame"
          >
            <div className="inner_frame">
              <img src={e.image} alt="" />
            </div>
            <p>{e.name.toUpperCase()}</p>
            <span>Framed Art Print</span>
            <span>By Alexa</span>
          </div>
        ))}
      </div>
    </>
  );
}
