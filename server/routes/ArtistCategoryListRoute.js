import express from "express";
import {
  create,
  getAllArtists,
  getArtistById,
  update,
  deleteArtist,
} from "../controller/ArtistCategoryListController.js";

const router = express.Router();

router.post("/artist", create); // create
router.get("/artists", getAllArtists); // read all
router.get("/artist/:id", getArtistById); // read one
router.put("/artist/:id", update); // update
router.delete("/artist/:id", deleteArtist); // delete

export default router;