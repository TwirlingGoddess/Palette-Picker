const express = require('express');
// const body = require('./public/index.html');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Chat Box';
app.locals.color = 'initial'


app.get('/', (request, response) => {
});

app.get('/api/v1/villages', (request, response) => {
  response.send(app.locals.title)
})

app.get('/api/v1/palettes', (request, response) => {
  response.send(app.locals.color)
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
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});