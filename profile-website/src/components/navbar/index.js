import React, { useState } from "react";
import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./styles.scss";
import { navBarData } from "../../Data/navBarData";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="navbar__container">
          <Link exact to="/" className="navbar__container__logo"></Link>
          <ul
            className={
              click
                ? "navbar__container__menu active"
                : "navbar__container__menu"
            }
          >
            {navBarData.map((item) => (
              <li className="navbar__container__menu__item">
                <Link
                  exact
                  to={item.to}
                  activeClassName="active"
                  className="navbar__container__menu__item__links"
                  onClick={click ? handleClick : null}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? <HiX size={30} /> : <FaBars size={30} />}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
