const express = require('express');
// bringing in the express library and saving the requiring of it to a variable
const app = express();
// instantiating that variabled expression of express and saving that to a variable
const bodyParser = require('body-parser');
// bringing in the bodyParser that is also required, we need it, albeit I don't know why

app.use(express.static('public'));
// telling my app to look for my static files inside of my public folder for deployment
app.use(bodyParser.json());
// telling the bodyParser to grab my code and parsed in json
app.use(bodyParser.urlencoded({ extended: true }));
// this is to ensure that my bodyParser is urlencoded

app.set('port', process.env.PORT || 3000);
// I'm telling port to listen at either 3000, or whatever I set Port to, currently it is undefined
const environment = process.env.NODE_ENV || 'development';
// just preparing to use this environment variable because the heroku instructions told me to, but I'm not using it
app.locals.title = 'Chat Box';
app.locals.color = 'initial'
// these were both placeholders for data

app.get('/', (request, response) => {
  // this is making a generic get request to like 15 
});

app.get('/api/v1/villages', (request, response) => {
  // this is setting up the possibility to have specific data at this endpoint
  response.send(app.locals.title)
  // using this fake data
})

app.get('/api/v1/palettes', (request, response) => {
  // this is setting up the possibility to have specific data at this endpoint
  response.send(app.locals.color)
  // using this fake data
})

// app.put('/', (request, response) => {
//   response.send('hy u durin');
//   response.json(app.locals.title)
// })

// middleware
// const urlLogger = (request, response, next) => {
//   console.log('Request URL:', request.url);
//   next();
// };
// app.get('/json', urlLogger, (request, response) => {
//   response.status(200).json({"name": "Robbie"});
// });

app.listen(app.get('port'), () => {
  // this is telling the app to listen for the deployment at the specified port
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  // and then log this message letting me know that it's successfully deployed
});
