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

app.get('/api/v1/title', (request, response) => {
  response.send(app.locals.title)
})

app.get('/api/v1/color', (request, response) => {
  response.send(app.locals.color)
})

// app.put('/', (request, response) => {
//   response.send('hy u durin');
//   response.json(app.locals.title)
// })

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});