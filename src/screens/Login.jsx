import "./Login.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

export default function Login() {
  const history = useHistory();
  const onSubmitForm = (e) => {
    e.preventDefault();
    history.push("/products");
  };
  return (
    <div className="login_">
      <div className="login">
        <h1>DenyDesigns.</h1>
        <h2>WHOLESALE LOGIN</h2>
        <form className="login_body" onSubmit={(e) => onSubmitForm(e)}>
          <div>
            <span>EMAIL</span>
            <input
              className="login_input1"
              type="email"
              placeholder="you@your-company.com"
              required
            />
          </div>
          <div>
            <span>PASSWORD</span>
            <input
              className="login_input1"
              type="password"
              placeholder=""
              required
            />
          </div>
          <span>
            <a href="">FORGOT PASSWORD</a>
          </span>
          <div id="btn">
            <button type="submit">LET'S GO!</button>
          </div>
          <p>Not a Wholesale Partner?</p>
          <div className="btn">
            <button onClick={() => history.push("/")}>KEEP BROWSING</button>
            <button onClick={() => history.push("/signup")}>APPLY HERE</button>
          </div>
        </form>
      </div>
    </div>
  );
}
