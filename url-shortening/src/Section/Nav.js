import { useState } from "react";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { IoMenu } from 'react-icons/io5'

const Nav = () => {
    const [active, setActive] = useState(false);

    const menuShow = () => {
        setActive(!active);
    };
  return (
    <>
      <div className="navbar">
        <div className="nav">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
        <div className={active ? "nav-items active" :"nav-items"}>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/resources" className="nav-link">Resources</Link>
        <div className="sign-mob">
          <Link to="/login" className="login">Login</Link>
          <button className="btn">Sign Up</button>
        </div>
        </div>
        </div>
        <div className="sign">
          <Link to="/login" className="login">Login</Link>
          <button className="btn">Sign Up</button>
        </div>
        <IoMenu className="menu" onClick={menuShow}/>
      </div>
    </>
  );
};

export default Nav;
