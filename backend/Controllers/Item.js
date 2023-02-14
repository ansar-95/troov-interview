const Item = require("../models/Item");

exports.addItem = (req, res, next) => {
    console.log(req.body)
    const item = new Item({
        name: req.body.name,
        description : req.body.description,
        color : req.body.color
      });
      item.save()
      .then(() => res.status(201).json({ message: 'Objet enregistré !', data : item}))
      .catch(error => res.status(400).json({ error }));
};
exports.fetchItem = (req, res, next) => {
    Item.find()
    .then(item => res.status(200).json(item))
    .catch(error => res.status(404).json({ error }));
};