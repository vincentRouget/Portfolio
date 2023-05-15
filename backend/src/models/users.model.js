const connection = require("../connection");

const getModelUsers = async () => {
  const [result] = await
    connection
      .query("SELECT * FROM user;");
  return result;
};
const getModelUserById = async (id) => {
  const [result] = await
    connection
      .query('SELECT * FROM user WHERE idUser = ?', [id]);
  return result;
};
const postModelUser = async (firstname, lastname, email, password, admin, image_user, date) => {
  const result = await
    connection
      .query("INSERT INTO user (firstname, lastname, email, password, admin, image_user, date) VALUES (?,?,?,?,?,?,?)", [firstname, lastname, email, password, admin, image_user, date]);
  return result;
};
const updateModelUserById = async (firstname, lastname, email, password, admin, image_user, date, id) => {
  const [result] = await
    connection
      .query("UPDATE user SET firstname = ?, lastname = ?, email = ?, password = ?, admin= ?, image_user =?, date =? WHERE idUser = ?", [firstname, lastname, email, password, admin, image_user, date, id]);
  return result;
};
const deleteModelUserById = async (id) => {
  const [result] = await
    connection
      .query("DELETE FROM user WHERE idUser = ?", [id]);
  return result;
};
const getModelUserToSignIn = async (email) => {
  const [result] = await
    connection
      .query("SELECT * FROM user WHERE email = ?", [email]);
  return result;
};
const modelSendMail = async (email, texte) => {
  const [result] = await
    connection
      .query("SELECT * FROM user WHERE email = ?", [email, texte]);
  return result;
};

module.exports = {
  getModelUsers,
  getModelUserById,
  postModelUser,
  updateModelUserById,
  deleteModelUserById,
  getModelUserToSignIn,
  modelSendMail,
};