const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mysql');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/pokemon', (req, res) => {
  //TODO - your code here!
  db.getAllPokemon((err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send('Error Getting Pokemon, I couldn\'t do it mom, I\'m sorry');
    } else {
      res.status(200).send(result)
    }
  })
});

app.put('/api/pokemon/:id', (req, res) => {
  db.updatePokemon(req.params.id, req.body.name, (err, result) => {
    if (err) {
      console.error(err);
      res.status(403).send(`Couldn't update pokemon, what type of name is ${req.body.name} anyway?`);
    } else {
      res.status(200).send('Changed the name')
    }
  })
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
