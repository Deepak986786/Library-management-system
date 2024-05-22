import { Router } from "express";
import {
  registerUser,
  loginUser,
  getAllUsers,
  getBorrowedBooksById,
  updateUser,
} from "../controllers/user.controller.js";

const userRoute = Router();
userRoute.route("/register").post(registerUser);
userRoute.route("/login").post(loginUser);
userRoute.route("/getAllUsers").get(getAllUsers);
userRoute.route("/borrowed/:userId").get(getBorrowedBooksById);
userRoute.route("/update").post(updateUser);

export default userRoute;
