import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
    NavContainer,
    LogoDiv,
    NavIcon,
    // HoverDiv,
    HoverTxt,
    SocialMediaDiv,
    Icon,
} from "./style/container";
import SocialMedia from "./socialMedia";
import Logo from "./logo";

const NavbarComponent = ({ hover, handleMouseOver, handleMouseLeave }) => {
    let route = useLocation().pathname;

    return (
        <NavContainer>
            <LogoDiv>
                <Logo />
            </LogoDiv>
            <NavIcon>
                <Link
                    to="/"
                    aria-label="home"
                    onMouseOver={() => handleMouseOver("Home")}
                    onMouseLeave={handleMouseLeave}
                >
                    {hover === "Home" ? (
                        <>
                            <Icon data-icon="&#xe904;" />
                            <HoverTxt>HOME</HoverTxt>
                        </>
                    ) : (
                        <Icon
                            style={{
                                color: `${
                                    route === "/"
                                        ? "#08fdd8"
                                        : "rgb(77, 77, 78)"
                                }`,
                            }}
                            data-icon="&#xe904;"
                        />
                    )}
                </Link>
                <Link
                    to="/about"
                    aria-label="About"
                    onMouseOver={() => handleMouseOver("About")}
                    onMouseLeave={handleMouseLeave}
                >
                    {hover === "About" ? (
                        <>
                            <Icon data-icon="&#xe903;" />
                            <HoverTxt>ABOUT</HoverTxt>
                        </>
                    ) : (
                        <Icon
                            style={{
                                color: `${
                                    route === "/about"
                                        ? "#08fdd8"
                                        : "rgb(77, 77, 78)"
                                }`,
                            }}
                            data-icon="&#xe903;"
                        />
                    )}
                </Link>
                <Link
                    to="/skills"
                    aria-label="Skills"
                    onMouseOver={() => handleMouseOver("Skills")}
                    onMouseLeave={handleMouseLeave}
                >
                    {hover === "Skills" ? (
                        <>
                            <Icon data-icon="&#xe901;" />
                            <HoverTxt>SKILLS</HoverTxt>
                        </>
                    ) : (
                        <Icon
                            style={{
                                color: `${
                                    route === "/skills"
                                        ? "#08fdd8"
                                        : "rgb(77, 77, 78)"
                                }`,
                            }}
                            data-icon="&#xe901;"
                        />
                    )}
                </Link>
                <Link
                    to="/projects"
                    aria-label="Projects"
                    onMouseOver={() => handleMouseOver("Projects")}
                    onMouseLeave={handleMouseLeave}
                >
                    {hover === "Projects" ? (
                        <>
                            <Icon fontSize="17px" data-icon="&#xe900;" />
                            <HoverTxt>MY WORK</HoverTxt>
                        </>
                    ) : (
                        <Icon
                            style={{
                                color: `${
                                    route === "/projects"
                                        ? "#08fdd8"
                                        : "rgb(77, 77, 78)"
                                }`,
                            }}
                            fontSize="17px"
                            data-icon="&#xe900;"
                        />
                    )}
                </Link>
            </NavIcon>
            <SocialMediaDiv>
                <SocialMedia />
            </SocialMediaDiv>
        </NavContainer>
    );
};

export default NavbarComponent;
