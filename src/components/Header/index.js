import { MdHome } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";

import "./index.css";

const Header = () => {
  return (
    <nav className="header-container">
      <div>
        <Link className="link-item" to="/">
          <img
            src="https://res.cloudinary.com/dykjwqjqi/image/upload/v1727955845/vwi8zaw3nzu1bqhf9f96.png"
            className="header-logo"
            alt="logo"
          />
        </Link>
      </div>
      <div className="header-icons-container">
        <Link className="link-item" to="/">
          <MdHome className="home-icon" size={30} />
        </Link>
        <Link className="link-item" to="/my-library">
          <ImBooks className="books-icon" size={30} />
        </Link>
      </div>
    </nav>
  );
};
export default Header;
