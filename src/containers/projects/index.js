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
            name: "Vidly-backend",
            description: "Vidly is a video rental application. This is the backend part of it and is made with NodeJS, express and MongoDB",
            link: "https://github.com/abhishekjain35/Vidly-backend",
            date: "Feb 2020",
        },
        {
            name: "weather-app",
            description: "This is my weather app repo. It is made using React. I've implemented the OpenWeatherMap API and used Axios for fetching it. It is responsive too.",
            link: "https://abhishek-weather-app.netlify.app/",
            date: "Dec 2019",
        },
        {
            name: "Vidly",
            description: "Vidly is a video rental application. This is the frontend part of it and is made with React. It has functionalities to Signup/Login, rent movie, check stocks, categories etc.",
            link: "https://github.com/abhishekjain35/Vidly",
            date: "Sep - Oct, 2019",
        },
        {
            name: "Counter_App",
            description: "It's just a simple counter app made with react. It is like a cart where we can add perform CRUD operations.",
            link: "https://github.com/abhishekjain35/Counter_App",
            date: "Oct 2019",
        },
        {
            name: "abhishek-portfolio",
            description: "This is a simple portfolio website made with HTML and CSS. It is one of the projects of freecodecamp and features other projects of it too.",
            link: "https://github.com/abhishekjain35/abhishek-portfolio",
            date: "Oct 2019",
        },
    ];

    return <ProjectsPage data={data} />;
};

export default Projects;
