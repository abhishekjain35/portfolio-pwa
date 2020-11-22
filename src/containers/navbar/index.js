import React, { useState } from "react";
import NavbarComponent from "../../components/navbar";

const NavbarContainer = () => {
    const [hover, setHover] = useState("");

    const handleMouseOver = (value) => {
        if (window.innerWidth >= 900) {
            setHover(value);
        }
    };
    const handleMouseLeave = () => {
        setHover("");
    };

    return (
        <NavbarComponent
            hover={hover}
            handleMouseOver={handleMouseOver}
            handleMouseLeave={handleMouseLeave}
        />
    );
};

export default NavbarContainer;
