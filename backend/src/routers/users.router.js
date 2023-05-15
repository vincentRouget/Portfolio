const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller.js");

const { hashPassword, verifyPassword, verifyToken, userPermissionsById, } = require("../auth");

router.post("/mail", usersController.sendMail)
router.post("/signin", usersController.getUserToSignIn, verifyPassword);
router.post("/", hashPassword, usersController.postUser);

router.use(verifyToken);

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.put("/:id", hashPassword,
  // userPermissionsById,
  usersController.updateUserById);
router.delete("/:id",
  // userPermissionsById,
  usersController.deleteUserById);

module.exports = router;