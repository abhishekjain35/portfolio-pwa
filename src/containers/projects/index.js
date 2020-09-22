import React from "react";
import ProjectsComponent from "./../../components/projects/index";

const ProjectsContainer = () => {
    const data = [
        {
            name: "Take-notes",
            description:
                "It's a note-taking web-app. It is made using ReactJs and uses material-UI. It uses QuillJs as the editor for taking notes, Firebase for authentication and cloud firestore as the database. Installable and works offline because it's a PWA(Progressive-Web-App)",
            link: "https://takenotes1.netlify.app/",
            date: "Jul 2020 – Aug 2020",
        },
        {
            name: "Tshirt-store",
            description:
                "Made with MERN Stack, this is complete e-commerce t-shirt store with the user and admin panels, Signup/Sign-in Validation, CRUD operations on products and Categories by admins(With Validation), Users and their carts, Create order and their status, Payments through Stripe and Braintree.",
            link: "https://github.com/abhishekjain35/Tshirt-store",
            date: "March - Apr, 2020",
        },
        {
            name: "Vidly-backend",
            description:
                "Vidly is a video rental application. This is the backend part of it and is made with NodeJS, express and MongoDB. It has features like Signup/Login, rent movies, stocks, categories etc.",
            link: "https://github.com/abhishekjain35/Vidly-backend",
            date: "Feb 2020",
        },
        {
            name: "weather-app",
            description:
                "This is a weather app. It is made using React. I've implemented the OpenWeatherMap API and used Axios for fetching it. It is responsive too.",
            link: "https://abhishek-weather-app.netlify.app/",
            date: "Dec 2019",
        },
        {
            name: "Vidly",
            description:
                "Vidly is a video rental application. This is the frontend part of it and is made with React. It has functionalities to Signup/Login, rent movie, check stocks, categories etc.",
            link: "https://github.com/abhishekjain35/Vidly",
            date: "Sep - Oct, 2019",
        },
        {
            name: "Counter_App",
            description:
                "It's just a simple counter app made with react. It is like a cart where we can perform CRUD operations.",
            link: "https://github.com/abhishekjain35/Counter_App",
            date: "Oct 2019",
        },
        {
            name: "abhishek-portfolio",
            description:
                "This is a simple portfolio website made with HTML and CSS. It is one of the projects of freecodecamp and features other projects of it too.",
            link: "https://github.com/abhishekjain35/abhishek-portfolio",
            date: "Oct 2019",
        },
    ];

    return <ProjectsComponent data={data} />;
};

export default ProjectsContainer;
