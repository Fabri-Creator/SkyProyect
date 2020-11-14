import { Link } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  return (
    <div className="main-header">
      <div className="sex-container">
        <Link to="/" className="sex-container-text">
          Mujer
        </Link>
        <Link to="/" className="sex-container-text">
          Hombre
        </Link>
      </div>
      <div className="user-shop-container">
        <Link to="/user/login" className="far fa-user"></Link>
        <Link
          to="/admin/new-product"
          id="shop-icon"
          className="fas fa-shopping-basket"
        ></Link>
      </div>
    </div>
  );
};
export default Header;
