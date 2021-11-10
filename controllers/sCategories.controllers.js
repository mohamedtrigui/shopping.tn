import SCategorie from "../models/SCategorie.js";

export const getSCategories = function (req, res) {
  SCategorie.find()
    .populate("categorie")
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const getSCategorie = function (req, res) {
  SCategorie.findById(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to find the SCategorie " + err);
    });
};

export const getSCategoriesByCat = function (req, res) {
  console.log(req.query.cat);
  SCategorie.find({ categorie: req.query.cat })
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to find the SCategorie " + err);
    });
};

export const createSCategorie = function (req, res) {
  let newSCat = new SCategorie(req.body);
  newSCat
    .save()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const updateSCategorie = function (req, res) {
  SCategorie.findByIdAndUpdate(req.body._id, req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to update the SCategorie " + err);
    });
};

export const deleteSCategorie = function (req, res) {
  SCategorie.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to delete the SCategorie " + err);
    });
};
