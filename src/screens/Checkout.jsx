import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Checkout.css";

export function Checkout(props) {
  const history = useHistory();
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="checkout">
        <div className="checkout1">
          <div className="checkout_image">
            <div className="checkout_frame">
              <img src={location.state.image} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="checkout_form">
            <div className="center">
              <h1>FRAMED ART PRINT</h1>
              <hr />
              <p className="checkout_p">FLORES CYAN BY SUNSHINE</p>
              <h5>PRODUCT DETAILS</h5>
              <div className="checkout_box">
                <span>
                  <img src={location.state.image} alt="" />
                </span>
                <span>
                  <img src={location.state.image} alt="" />
                </span>
              </div>
            </div>
            <div className="checkout_div">
              <div className="checkout_dropdown">
                <div>
                  <label>STYLE</label>
                </div>
                <div className="checkout_select">
                  <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="checkout_dropdown">
                <div>
                  <label>FRAME</label>
                </div>
                <div className="checkout_select">
                  <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="checkout_dropdown">
                <div>
                  <label>SIZE</label>
                </div>
                <div className="checkout_select">
                  <select>
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
            </div>

            <hr />
            <div className="center">
              <p>Deny Designs is for wholesale customers only</p>
              <button onClick={() => history.push("/login")}>
                WHOLESALE LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
