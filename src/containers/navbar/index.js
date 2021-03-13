import React, { useState } from "react";
import NavbarComponent from "../../components/navbar";
import { useHistory } from "react-router-dom";

const NavbarContainer = () => {
  const history = useHistory();
  const [hover, setHover] = useState("");

  const handleMouseOver = (value) => {
    if (window.innerWidth >= 900) {
      setHover(value);
    }
  };
  
  const handleMouseLeave = () => {
    setHover("");
  };

  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <NavbarComponent
      hover={hover}
      handleMouseOver={handleMouseOver}
      handleMouseLeave={handleMouseLeave}
      handleLogoClick={handleLogoClick}
    />
  );
};

export default NavbarContainer;
