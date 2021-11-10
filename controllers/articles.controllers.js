import mongoose from "mongoose";
import multer from "multer";
import path from "path";

import Article from "../models/Article.js";

export const getArticles = function (req, res) {
  Article.find()
    .populate("scategorie")
    .populate("categorie")
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const getArticle = function (req, res) {
  Article.findById(req.params.id)
    .populate("scategorie")
    .populate("categorie")
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to find the Article " + err);
    });
};

export const createArticle = function (req, res) {
  let newArticle = new Article(req.body);
  console.log("creating new article...");
  console.log(req.body);
  console.log(req.file);
  //setting the name of the field imageartpetitf the new filename of our image
  newArticle.imageartpetitf = req.file.filename;
  newArticle
    .save()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to save to database " + err);
    });
};

export const updateArticle = function (req, res) {
  if (!mongoose.Types.ObjectId.isValid(req.body._id)) return res.status(400).send(`pas de Article avec l'id ${req.body._id}`);
  console.log("updating article...");

  Article.findByIdAndUpdate(req.body._id, req.body)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to update the Article " + err);
    });
};

export const deleteArticle = function (req, res) {
  Article.findByIdAndDelete(req.params.id)
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(400).send("unable to delete the Article " + err);
    });
};

/*******Photo Section********** */

//Set Storage Engine
const imageStorage = multer.diskStorage({
  // Destination to store image
  destination: "assets/images",
  filename: (req, file, cb) => {
    cb(null, "article" + "_" + Date.now() + path.extname(file.originalname));
    //path.extname(file.originalname) to get the extension
    // file.fieldname is name of the field input in the html form
    // path.extname get the uploaded file extension
  },
});

//Init Upload
export const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000, // 1000000 Bytes = 1 MB
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

// export const uploadImage = function () {
//   imageUpload.single("imageartpetitf");
// };

/*******sending Photos to the front********** */

export const getPhotos = function (req, res) {
  res.sendFile("/assets/images/" + req.params.namePhoto, { root: "." });
};
