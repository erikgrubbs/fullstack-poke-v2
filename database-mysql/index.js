const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

const getAllPokemon = function(callback) {
  // TODO - your code here!
  connection.query(`SELECT 
   pokemon.id,
   pokemon.name,
   pokemon.image_url,
   types.name AS type
   FROM pokemon 
   LEFT OUTER JOIN types ON type_id = types.id`, (err, result) => {
    if (err) {
      callback(err)
    } else {
      callback(null, result);
    }
  })
};

const updatePokemon = function(pokemonId, newName, callback) {
  connection.query(`UPDATE pokemon SET name="${newName}" WHERE id=${pokemonId}`, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result)
    }
  })
}


module.exports = {
  getAllPokemon,
  updatePokemon,
  banana: 'wayne'
};
