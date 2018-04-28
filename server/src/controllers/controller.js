const db = require('../db/index');

const getPlayers = (req, res) => {
  db.getAll((data) => {
    res.status(200).send(data)
  })
}

const savePlayer = (req, res) => {
  db.saveOne(req.body, (data) => {
    res.status(201).send(data)
  });
}

exports.savePlayer = savePlayer;
exports.getPlayers = getPlayers;
