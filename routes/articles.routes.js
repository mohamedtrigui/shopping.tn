import express from "express";
import {
  getArticles,
  getArticle,
  updateArticle,
  createArticle,
  deleteArticle,
  imageUpload,
  getPhotos,
} from "../controllers/articles.controllers.js";
import { auth } from "../middlewares/authorization.js";

const router = express.Router();

router.get("/", auth, getArticles);
router.get("/:id", getArticle);
router.get("/photos/:namePhoto", getPhotos);
router.post("/", imageUpload.single("imageartpetitf"), createArticle); //uploadImage, it was with this method //maybe it's because of next() a must if multiple hanlers functions
//router.post("/upload", imageUpload.single("image"), uploadArticlePhotos); // image here matches the image appended in the FormData in angular//
router.put("/", updateArticle);
router.delete("/:id", deleteArticle);

export default router;
