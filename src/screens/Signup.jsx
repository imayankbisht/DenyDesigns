import Navbar from "../components/Navbar";
import "./Signup.css";
export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="signup">
        <div className="signup_body">
          <div className="signup_">
            <div className="signup_input">
              <span>FIRST NAME</span>
              <input type="text" />
            </div>
            <div className="signup_input">
              <span>PHONE</span>
              <input type="text" />
            </div>
            <div className="signup_input">
              <span>EMAIL</span>
              <input type="text" />
            </div>
          </div>
          <div className="signup_">
            <div className="signup_input">
              <span>LAST NAME</span>
              <input type="text" />
            </div>
            <div className="signup_input">
              <span>MOBILE PHONE</span>
              <input type="text" />
            </div>
          </div>
        </div>
        <hr />
        <div className="signup_body">
          <div className="signup_">
            <div className="signup_input">
              <span>COMPANY NAME</span>
              <input type="text" />
            </div>
            <div className="signup_input">
              <span>COMPANY ADDRESS</span>
              <input type="text" />
            </div>
            <div className="signup_input">
              <span>CITY</span>
              <input type="text" />
            </div>
          </div>
          <div className="signup_">
            <div className="signup_input">
              <span>COMPANY WEBSITE</span>
              <input type="text" />
            </div>
            <div className="signup_input">
              <span>ADDRESS 2</span>
              <input type="text" />
            </div>
            <div className="signup_input">
              <span>STATE</span>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
