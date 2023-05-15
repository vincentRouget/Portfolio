const usersModel = require("../models/users.model.js");
const transporter = require("../mailer");

const getUsers = async (req, res) => {
  const users = await usersModel.getModelUsers();
  res.status(200).send(users);
};
const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await usersModel.getModelUserById(id);
  res.status(200).send(user);
};
const postUser = async (req, res) => {
  const { firstname, lastname, email, password, admin, image_user, date } = req.body;
  const users = await usersModel.postModelUser(firstname, lastname, email, password, admin, image_user, date);
  res.status(201).send("User created");
};
const updateUserById = async (req, res) => {
  const { firstname, lastname, email, password, admin, image_user, date } = req.body;
  const id = parseInt(req.params.id);
  const user = await usersModel.updateModelUserById(firstname, lastname, email, password, admin, image_user, date, id);
  res.status(200).send("User modified");
};
const deleteUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  const user = await usersModel.deleteModelUserById(id);
  res.status(200).send("User deleted");
};
const getUserToSignIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await usersModel.getModelUserToSignIn(email);
      if (user[0] != null) {
        req.user = user[0];
        next();
      } else {
        res.status(404).send("User not found");
      }
    }
    else if (!email && !password) {
      res.status(400).send("Email and password are required")
    }
    else if (!email) {
      res.status(400).send("Email is required");
    }
    else {
      res.status(400).send("Password is required");
    }
  }
  catch (err) {
    res.status(500).send("Internal Server Error")
  }
};
const sendMail = async (req, res) => {
  try {
    const { email, texte } = req.body;
    if (email) {
      const user = await usersModel.modelSendMail(email, texte);
      if (user[0] != null) {
        req.user = user[0];
        const mailOptions = {
          from: `${email}`,
          to: 'human79@hotmail.fr',
          subject: `Nouveau mail depuis le site`,
          text: `Email envoyé !`,
          html: `${texte}`
        };
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.error("Fail");
          } else {
            console.warn("Success");
            res.status(200).send("Email sent")
          }
        });
      } else {
        res.status(404).send("User not found");
      }
    }
    else {
      res.status(400).send("Email is required");
    }
  }
  catch (err) {
    res.status(500).send("Internal Server Error")
  }
};

module.exports = {
  getUsers,
  getUserById,
  postUser,
  updateUserById,
  deleteUserById,
  getUserToSignIn,
  sendMail,
};
