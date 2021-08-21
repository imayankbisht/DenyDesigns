import "./styles.css";
import HomeScreens from "./screens/HomeScreen";
import Login from "./screens/Login";
import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Signup from "./screens/Signup";
import { Products } from "./screens/Products";
import { Checkout } from "./screens/Checkout";

export default function App() {
  const user = false;
  const history = useHistory();
  return (
    <>
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <HomeScreens />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route exact path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
