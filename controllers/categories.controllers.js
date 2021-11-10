import express from "express";
import mongoose from "mongoose";

import Categorie from "../models/Categorie.js";

export const getCategories = function (req, res) {
  Categorie.find()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const getCategorie = function (req, res) {
  Categorie.findById(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to find the categorie " + err);
    });
};

export const createCategorie = function (req, res) {
  let newCat = new Categorie(req.body);
  newCat
    .save()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const updateCategorie = function (req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.body._id))
    return res.status(400).send(`pas de categorie avec l'id ${req.body._id}`);

  Categorie.findByIdAndUpdate(req.body._id, req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to update the categorie " + err);
    });
};

export const deleteCategorie = function (req, res) {
  Categorie.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to delete the categorie " + err);
    });
};
