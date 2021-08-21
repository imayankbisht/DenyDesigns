import "./Navbar.css";
import { useHistory } from "react-router-dom";
import { GoSearch, GoPerson } from "react-icons/go";

export default function Navbar() {
  const history = useHistory();

  return (
    <header>
      <nav>
        <ul className="nav_links">
          <li>
            <h4 onClick={() => history.push("/")}>DenyDesigns.</h4>
          </li>
          <li onClick={() => history.push("/products")}>PRODUCTS</li>
          <li>COLLECTIONS</li>
          <li>OUR STORY</li>
          <li>ART</li>
          <li>WHOLESALE</li>
        </ul>
      </nav>
      <div className="buttons">
        <button>
          <GoSearch />
        </button>
        <button onClick={() => history.push("/login")}>
          <GoPerson />
        </button>
      </div>
    </header>
  );
}
