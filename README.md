# SBA318
For this project I have created 3 data files which are clients.js, projects.js, and rooms.js. 
All data types have GET, PUT, POST, and DELETE routes in the index.js file.
The clients file contains an array of client objects with the name, houseType, numberofProjects, and currentProjects keys. This data is accessible from the get route as well as the Homepage.jsx view engine page.
From this page I created a NewClient.jsx view engine page which allows you to add each of the 4 keys into a new client object and submit this. It takes you back to the clients array and should add the newest client to the end of the array, but I am getting null for some reason.
You can also get to the Homepage.jsx page from here which along with the clients.js file, the projects.js and rooms.js files are accessible. There is also a button to get to the NewClient.jsx view engine, so these 2 pages are able to toggle back and forth.
The Homepage.jsx page also has an image included and a heading.
The rooms.js file contains an array of objects using the 4 keys name, furniture, purpose, and isLarge.
Lastly the projects.js file contains an array of objects using the 4 keys name, room, budget, onBudget.

I also added a public/styles/style.css file and added styling, but the only thing that is linking is the font-family in the h1 selector. I will continue debugging and trying to figure it out but needed to get this turned in for now.

Overall I learned a lot from this project and was able to debug and work with view engines. I want to figure out how to make it much prettier as I prefer front-end, but for now I am happy with my progress for this SBA.
