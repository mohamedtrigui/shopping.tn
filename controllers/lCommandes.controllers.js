import mongoose from "mongoose";

import LigneCommande from "../models/LigneCommande.js";

export const getLigneCommandes = function (req, res) {
  LigneCommande.find()
    .populate("article")
    .populate("commande")
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const getLigneCommande = function (req, res) {
  LigneCommande.findById(req.params.id)
    .populate("article")
    .populate("commande")
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to find the LigneCommande " + err);
    });
};

export const createLigneCommande = function (req, res) {
  let newCom = new LigneCommande(req.body);
  newCom
    .save()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const updateLigneCommande = function (req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(400).send(`pas de LigneCommande avec l'id ${req.body._id}`);

  LigneCommande.findByIdAndUpdate(req.body._id, req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to update the LigneCommande " + err);
    });
};

export const deleteLigneCommande = function (req, res) {
  LigneCommande.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to delete the LigneCommande " + err);
    });
};
