import mongoose from "mongoose";

import Commande from "../models/Commande.js";

export const getCommandes = function (req, res) {
  Commande.find()
    .populate("client")
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const getCommande = function (req, res) {
  Commande.findById(req.params.id)
    .populate("client")
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to find the Commande " + err);
    });
};

export const createCommande = function (req, res) {
  let newCom = new Commande(req.body);
  newCom
    .save()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const updateCommande = function (req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(400).send(`pas de Commande avec l'id ${req.body._id}`);

  Commande.findByIdAndUpdate(req.body._id, req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to update the Commande " + err);
    });
};

export const deleteCommande = function (req, res) {
  Commande.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to delete the Commande " + err);
    });
};
