import express from 'express';

import {
  create as createUser,
  deleteUser,
  getAllUsers,
  getUserById,
  update as updateUser
} from '../controller/userController.js';

import {
  create as createArtist,
  deleteArtist,
  getAllArtist,
  getArtistById,
  update as updateArtist
} from '../controller/artistController.js';

const route = express.Router();

// Users
route.post("/user", createUser);
route.get("/users", getAllUsers);
route.get("/user/:id", getUserById);
route.put("/update/user/:id", updateUser);
route.delete("/delete/user/:id", deleteUser);

// Artists
route.post("/artist", createArtist);
route.get("/artists", getAllArtist);
route.get("/artist/:id", getArtistById);
route.put("/update/artist/:id", updateArtist);
route.delete("/delete/artist/:id", deleteArtist);

export default route;
