const projects = [
  {
    title: "Pet Playdate",
    technologies: [
      "Handlebars",
      "CSS",
      "Javascript",
      "Express server",
      "Node.js",
      "Sequelize",
      "MySQL",
    ],
    description:
      "An app that allows the user to create a profile for their pet, upload a photo, and fill out a bio. From there, you can select zip codes and dates for meetups with other pets!",
    imgSrc: "https://github.com/hope428/pet-playdate/blob/main/public/images/screenshot.png?raw=true",
    deployed: "https://morning-journey-92654.herokuapp.com/home",
    repo: "https://github.com/hope428/pet-playdate",
  },
  {
    title: "Animal Crossing Blog",
    technologies: ["HTML", "CSS", "Javascript", "Sequelize", "MySQL", "Express", "Node.js"],
    description:
      "A CRUD, blog-style application where users can sign up and share their thoughts about Animal Crossing. Features the ability to comment on others posts, and create/update/delete posts of your own.",
    imgSrc: "https://github.com/hope428/animal-crossing-blog/blob/main/images/update.png?raw=true",
    deployed: "https://damp-dusk-18777.herokuapp.com/",
    repo: "https://github.com/hope428/animal-crossing-blog",
  },
  {
    title: "Movie Search and Watchlist",
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Third-party API",
      "Localstorage",
    ],
    description:
      "This app uses the OMDB Api to allow the user to search for a movie title. When you find the movie you'd like, you can save it to a watchlist that will be stored in your browser's localstorage.",
    imgSrc: "https://raw.githubusercontent.com/hope428/movie-database/main/images/searchresults.png",
    deployed: "https://hope428.github.io/movie-database/",
    repo: "https://github.com/hope428/movie-database",
  },
  {
    title: "Random Meal Generator",
    technologies: ["HTML", "CSS", "Javascript", "Third-party API"],
    description: "Having trouble deciding what to make for dinner? Let this random meal picker decide. It will use data from an API to give the user a cocktail, dinner, and dessert recipe based off user preferences.",
    imgSrc: "https://github.com/hope428/meal-planner/blob/main/assets/images/screenshot.jpg?raw=true",
    deployed: "https://hope428.github.io/meal-planner/",
    repo: "https://github.com/hope428/meal-planner/",
  },
  {
    title: "Text Editor PWA",
    technologies: ["Webpack", "Manifest.json", "IndexedDB"],
    description: "This is a basic text editor PWA, this is compiled with Webpack and downloadable as a PWA. The user's notes are saved with IndexedDB",
    imgSrc: "https://raw.githubusercontent.com/hope428/text-editor-pwa/main/pacific-citadel-98307.herokuapp.com_.png",
    deployed: "https://pacific-citadel-98307.herokuapp.com/",
    repo: "https://github.com/hope428/text-editor-pwa",
  },
  {
    title: "Terminus",
    technologies: ["React", "Express", "Node", "GraphQL", "MongoDB", "Chakra", "Stripe"],
    description: "A Zombie Apocalypse themed mock e-commerce website. Database is MongoDB, Backend is Express Node, and GraphQL. Stripe integration is functional.",
    imgSrc: "https://github.com/hope428/terminus/raw/main/client/public/img/homepage.png",
    deployed: "https://frozen-brushlands-93314.herokuapp.com/",
    repo: "https://github.com/hope428/terminus",
  },
];

export default projects;
