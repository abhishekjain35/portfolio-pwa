import React from "react";
import ProjectsPage from "./../../components/projects/index";

const Projects = () => {
    const data = [
        {
            name: "Tshirt-store",
            description:
                "Made with MERN Stack, this is complete e-commerce t-shirt store with user and admin panels, stripe and braintree payment gateways.",
            link: "https://github.com/abhishekjain35/Tshirt-store",
            date: "March - Apr, 2019",
        },
        {
            name: "",
            description: "",
            link: "",
            date: "",
        },
        {
            name: "",
            description: "",
            link: "",
            date: "",
        },
        {
            name: "",
            description: "",
            link: "",
            date: "",
        },
        {
            name: "",
            description: "",
            link: "",
            date: "",
        },
        {
            name: "",
            description: "",
            link: "",
            date: "",
        },
    ];

    return <ProjectsPage data={data} />;
};

export default Projects;
