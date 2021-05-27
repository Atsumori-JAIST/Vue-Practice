const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});