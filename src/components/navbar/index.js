import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    NavContainer,
    LogoDiv,
    Svg,
    NavIcon,
    NavSvg,
    HoverDiv,
    HoverTxt,
} from "./style/container";
import SocialMedia from "./socialMedia";

const NavBar = () => {
    let route = useLocation().pathname;
    const [hover, setHover] = useState("");

    return (
        <NavContainer>
            <LogoDiv>
                <Svg
                    aria-hidden="true"
                    height="40"
                    fill="#ffffff"
                    viewBox="0 1 511 511.999"
                    width="50"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0" />
                </Svg>
            </LogoDiv>
            <NavIcon>
                <Link to="/">
                    <HoverDiv
                        onMouseEnter={
                            window.innerWidth <= 960
                                ? null
                                : () => setHover("homeIcon")
                        }
                        onMouseLeave={() => setHover("")}
                    >
                        {hover === "homeIcon" ? (
                            <HoverTxt>HOME</HoverTxt>
                        ) : (
                            <NavSvg
                                aria-hidden="true"
                                height="25px"
                                fill={
                                    route === "/"
                                        ? "#08fdd8"
                                        : "rgb(77, 77, 78)"
                                }
                                viewBox="0 1 511 511.999"
                                width="50px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m498.699219 222.695312c-.015625-.011718-.027344-.027343-.039063-.039062l-208.855468-208.847656c-8.902344-8.90625-20.738282-13.808594-33.328126-13.808594-12.589843 0-24.425781 4.902344-33.332031 13.808594l-208.746093 208.742187c-.070313.070313-.144532.144531-.210938.214844-18.28125 18.386719-18.25 48.21875.089844 66.558594 8.378906 8.382812 19.441406 13.234375 31.273437 13.746093.484375.046876.96875.070313 1.457031.070313h8.320313v153.695313c0 30.417968 24.75 55.164062 55.167969 55.164062h81.710937c8.285157 0 15-6.71875 15-15v-120.5c0-13.878906 11.292969-25.167969 25.171875-25.167969h48.195313c13.878906 0 25.167969 11.289063 25.167969 25.167969v120.5c0 8.28125 6.714843 15 15 15h81.710937c30.421875 0 55.167969-24.746094 55.167969-55.164062v-153.695313h7.71875c12.585937 0 24.421875-4.902344 33.332031-13.8125 18.359375-18.367187 18.367187-48.253906.027344-66.632813zm-21.242188 45.421876c-3.238281 3.238281-7.542969 5.023437-12.117187 5.023437h-22.71875c-8.285156 0-15 6.714844-15 15v168.695313c0 13.875-11.289063 25.164062-25.167969 25.164062h-66.710937v-105.5c0-30.417969-24.746094-55.167969-55.167969-55.167969h-48.195313c-30.421875 0-55.171875 24.75-55.171875 55.167969v105.5h-66.710937c-13.875 0-25.167969-11.289062-25.167969-25.164062v-168.695313c0-8.285156-6.714844-15-15-15h-22.328125c-.234375-.015625-.464844-.027344-.703125-.03125-4.46875-.078125-8.660156-1.851563-11.800781-4.996094-6.679688-6.679687-6.679688-17.550781 0-24.234375.003906 0 .003906-.003906.007812-.007812l.011719-.011719 208.847656-208.839844c3.234375-3.238281 7.535157-5.019531 12.113281-5.019531 4.574219 0 8.875 1.78125 12.113282 5.019531l208.800781 208.796875c.03125.03125.066406.0625.097656.09375 6.644531 6.691406 6.632813 17.539063-.03125 24.207032zm0 0" />
                            </NavSvg>
                        )}
                    </HoverDiv>
                </Link>
                <Link to="/about">
                    <HoverDiv
                        onMouseEnter={
                            window.innerWidth <= 960
                                ? null
                                : () => setHover("aboutEnter")
                        }
                        onMouseLeave={() => setHover("")}
                    >
                        {hover === "aboutEnter" ? (
                            <HoverTxt>ABOUT</HoverTxt>
                        ) : (
                            <NavSvg
                                aria-hidden="true"
                                height="25"
                                fill={
                                    route === "/about"
                                        ? "#08fdd8"
                                        : "rgb(77, 77, 78)"
                                }
                                viewBox="0 1 511 511.999"
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m437.02,330.98c-27.883-27.882-61.071-48.523-97.281-61.018C378.521,243.251,404,198.548,404,148C404,66.393,337.607,0,256,0S108,66.393,108,148c0,50.548,25.479,95.251,64.262,121.962c-36.21,12.495-69.398,33.136-97.281,61.018C26.629,379.333,0,443.62,0,512h40c0-119.103,96.897-216,216-216s216,96.897,216,216h40C512,443.62,485.371,379.333,437.02,330.98z M256,256c-59.551,0-108-48.448-108-108S196.449,40,256,40c59.551,0,108,48.448,108,108S315.551,256,256,256z" />
                            </NavSvg>
                        )}
                    </HoverDiv>
                </Link>
                <Link to="/skills">
                    <HoverDiv
                        onMouseEnter={
                            window.innerWidth <= 960
                                ? null
                                : () => setHover("skillEnter")
                        }
                        onMouseLeave={() => setHover("")}
                    >
                        {hover === "skillEnter" ? (
                            <HoverTxt>SKILLS</HoverTxt>
                        ) : (
                            <NavSvg
                                fill={
                                    route === "/skills"
                                        ? "#08fdd8"
                                        : "rgb(77, 77, 78)"
                                }
                                enable-background="new 0 0 512 512"
                                height="25"
                                viewBox="0 0 512 512"
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m481.391 335.216c-27.202-27.201-67.294-36.966-103.749-25.745l-36.551-36.552 159.708-159.707c7.223-7.223 11.201-16.827 11.201-27.042s-3.978-19.82-11.201-27.042l-47.927-47.927c-7.223-7.224-16.827-11.201-27.042-11.201-10.216 0-19.819 3.977-27.042 11.201l-159.708 159.708-36.551-36.552c11.221-36.454 1.456-76.547-25.745-103.749-15.053-15.053-34.05-24.981-54.937-28.71-20.4-3.643-41.171-1.167-60.065 7.158-3.02 1.331-5.189 4.066-5.797 7.31-.607 3.243.424 6.578 2.758 8.912l47.709 47.708-33.729 33.728-47.709-47.707c-2.334-2.334-5.671-3.362-8.912-2.758-3.244.607-5.979 2.776-7.309 5.797-8.325 18.895-10.8 39.665-7.159 60.065 3.729 20.887 13.657 39.884 28.711 54.938 27.201 27.2 67.296 36.966 103.749 25.745l36.551 36.551s-91.74 91.74-122.32 122.321c-1.822 1.822-2.421 3.925-2.427 3.945l-43.551 131.405c-1.19 3.589-.253 7.543 2.421 10.216 1.906 1.905 4.461 2.929 7.072 2.929 1.052 0 2.113-.166 3.144-.508l131.278-43.508c2.064-.589 4.072-2.47 4.072-2.47l122.32-122.32 36.552 36.552c-11.221 36.454-1.456 76.548 25.745 103.75 15.053 15.053 34.05 24.98 54.937 28.71 6.114 1.092 12.259 1.634 18.378 1.634 14.301 0 28.454-2.962 41.686-8.792 3.02-1.331 5.189-4.066 5.797-7.31.607-3.243-.424-6.578-2.758-8.912l-47.709-47.708 33.729-33.729 47.708 47.708c2.334 2.334 5.669 3.37 8.912 2.758 3.244-.607 5.979-2.776 7.309-5.797 8.325-18.895 10.801-39.665 7.159-60.065-3.727-20.888-13.655-39.884-28.708-54.938zm-68.461-309.873c3.446-3.446 8.027-5.344 12.9-5.344s9.454 1.897 12.9 5.344l47.927 47.927c3.445 3.445 5.343 8.026 5.343 12.9 0 4.873-1.898 9.455-5.344 12.9l-32.447 32.447-73.726-73.727zm-269.104 158.9c-1.91-1.91-4.467-2.929-7.073-2.929-1.188 0-2.388.212-3.539.648-30.698 11.624-65.526 4.146-88.729-19.057-20.932-20.932-28.988-50.46-22.26-78.403l43.425 43.426c3.905 3.904 10.237 3.904 14.142 0l47.871-47.871c3.905-3.905 3.905-10.237 0-14.142l-43.425-43.425c27.941-6.73 57.47 1.328 78.403 22.26 23.203 23.203 30.683 58.031 19.057 88.728-1.393 3.679-.501 7.832 2.28 10.613l40.959 40.959-40.152 40.152zm-116.231 300.162 14.465-43.648 29.181 29.181zm64.891-21.506-43.385-43.385 10.686-32.244 64.942 64.942zm50.778-20.437-29.792-29.792 97.884-97.884c3.905-3.905 3.905-10.237 0-14.142-3.904-3.904-10.237-3.904-14.142 0l-97.884 97.884-29.793-29.792 296.804-296.804.807.807 28.984 28.985-134.99 134.991c-3.905 3.905-3.905 10.237 0 14.142 1.952 1.952 4.512 2.929 7.071 2.929s5.119-.977 7.071-2.929l134.99-134.991 29.792 29.793zm346.245-14.701-43.425-43.425c-1.875-1.875-4.419-2.929-7.071-2.929s-5.196 1.054-7.071 2.929l-47.87 47.871c-3.905 3.905-3.905 10.237 0 14.142l43.425 43.426c-27.945 6.727-57.471-1.328-78.403-22.26-23.203-23.203-30.683-58.031-19.057-88.729 1.393-3.679.501-7.832-2.281-10.613l-40.959-40.959 40.152-40.152 40.96 40.96c2.781 2.781 6.933 3.675 10.613 2.28 30.695-11.626 65.525-4.146 88.728 19.057 20.932 20.932 28.988 50.46 22.259 78.402z" />
                                <path d="m236.378 285.621c-4.181 0-7.997-2.71-9.405-6.636-1.388-3.872-.2-8.321 2.936-10.987 3.276-2.785 8.092-3.113 11.745-.869 3.506 2.154 5.319 6.422 4.523 10.442-.913 4.615-5.092 8.05-9.799 8.05z" />
                            </NavSvg>
                        )}
                    </HoverDiv>
                </Link>
                <Link to="/projects">
                    <HoverDiv
                        onMouseEnter={
                            window.innerWidth <= 960
                                ? null
                                : () => setHover("projectEnter")
                        }
                        onMouseLeave={() => setHover("")}
                    >
                        {hover === "projectEnter" ? (
                            <HoverTxt paddLeft="0">PROJECTS</HoverTxt>
                        ) : (
                            <NavSvg
                                height="25"
                                fill={
                                    route === "/projects"
                                        ? "#08fdd8"
                                        : "rgb(77, 77, 78)"
                                }
                                viewBox="0 0 511 511.99775"
                                width="50"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="m501.425781 238.109375-82.222656-41.109375 82.222656-41.113281c14.707031-7.351563 14.722657-28.414063 0-35.777344l-236-118c-5.632812-2.8125-12.257812-2.8125-17.890625 0l-236 118c-14.707031 7.355469-14.722656 28.417969 0 35.777344l82.222656 41.113281-82.222656 41.109375c-14.707031 7.355469-14.722656 28.414063 0 35.777344l82.222656 41.113281-82.222656 41.109375c-14.707031 7.355469-14.722656 28.414063 0 35.777344l236 118c5.621094 2.808593 12.246094 2.820312 17.890625 0l236-118c14.707031-7.355469 14.722657-28.414063 0-35.777344l-82.222656-41.109375 82.222656-41.113281c14.707031-7.351563 14.722657-28.414063 0-35.777344zm-244.945312-195.75 191.277343 95.640625-191.277343 95.636719-191.277344-95.636719zm191.277343 331.640625-191.277343 95.636719-191.277344-95.636719 73.277344-36.640625 109.054687 54.527344c5.625 2.808593 12.246094 2.820312 17.890625 0l109.054688-54.527344zm-191.277343-22.363281-191.277344-95.636719 73.277344-36.640625 109.054687 54.527344c5.625 2.808593 12.246094 2.820312 17.890625 0l109.054688-54.527344 73.277343 36.640625zm0 0" />
                            </NavSvg>
                        )}
                    </HoverDiv>
                </Link>
            </NavIcon>
            <SocialMedia />
        </NavContainer>
    );
};

export default NavBar;
