const initialState = {
  portfolio: [
    {
      siteName: "SkateShop",
      urlSite: "https://skateshop-scv.herokuapp.com/",
      imagePath: `${process.env.PUBLIC_URL}/images/skateShop.png`,
      description:
        "SkateShop is a E-commerce fully responsive website where you can buy skate assortment. You can login to palce orders or add products to your favorite.",
      functionalities: [
        "Fully functional ordering system",
        "Login Page with full login functionalities (sign up and sign in) with auth0 authentication",
        "mongoDB for real time database",
        "stores orders for logged in users",
        "Responsive design",
      ],
      technologies: [
        "React",
        "MongoDB",
        "Javascript",
        "Node.js",
        "express.js",
        "HTML5",
        "CSS3",
        "Heroku",
        "auth0",
      ],
      status: "finished",
    },
    {
      siteName: "CRUD-app",
      urlSite: "https://crud-app-scover.herokuapp.com/",
      imagePath: `${process.env.PUBLIC_URL}/images/crud_img.png`,
      description:
        "Simple blog with fully functional CRUD system. (create, read, update, delete)",
      functionalities: [
        "Adding, reading, removing and updating posts. Searching by categories.",
        "Responsive desing",
      ],
      technologies: ["React", "HTML5", "CSS3", "Heroku"],
      status: "finished",
    },
    {
      siteName: "Tickets ordering",
      urlSite: "https://order-tickets-express-scv.herokuapp.com/",
      imagePath: `${process.env.PUBLIC_URL}/images/order-tickets-img.png`,

      description:
        "You can watch for free seats and order a tickets for concerts. Availability of seats is displayed live so you're always up to date!'",
      functionalities: [
        "Watching and booking seats and tickets on LIVE",
        "Responsive desing",
      ],
      technologies: [
        "React",
        "HTML5",
        "CSS3",
        "mongoDB",
        "Node.js",
        "express.js",
        "websockets",
        "Heroku",
      ],
      status: "finished",
    },
    {
      siteName: "Pizzeria",
      urlSite: "https://pizzeria-app-scover.herokuapp.com/",
      imagePath: `${process.env.PUBLIC_URL}/images/pizzeria_img.png`,
      description:
        "You can find here some informations about our pizzeria. Order pizza or book table for romantic date.",
      functionalities: [
        "Fully functional ordering and booking system",
        "Fully customized orders(toppings, sauce, crust) and booking for exact day and time",
        "Responsive desing",
      ],
      technologies: [
        "Javascript",
        "HTML5",
        "CSS3",
        "REST API",
        "Handlebars",
        "Heroku",
      ],
      status: "finished",
    },
    {
      siteName: "Music searcher app",
      urlSite: "https://music-searcher-scover.herokuapp.com/",
      imagePath: `${process.env.PUBLIC_URL}/images/music_img.png`,
      description:
        "Website where you can search for artist music, listen and discover new ones!",
      functionalities: [
        "Listening to music",
        "Searching music",
        "Discovering new music",
        "Responsive desing",
      ],
      technologies: ["Javascript", "HTML5", "CSS3", "Heroku"],
      status: "finished",
    },
    {
      siteName: "Professional Movie Editor Portfolio",
      urlSite: "https://filip-szatkowski.netlify.app/",
      imagePath: `${process.env.PUBLIC_URL}/images/filq.png`,
      description: "Portfolio website designed for Professional movie editior.",
      functionalities: [
        "Find recent movies made by FILQ",
        "Check views and likes",
        "Sending mails with questions to creator",
      ],
      technologies: [
        "REACT",
        "HTML5",
        "CSS3",
        "Netlify",
        "Youtube API",
        "particles.js",
      ],
      status: "finished",
    },
  ],
};

export default initialState;
