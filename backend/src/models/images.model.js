const connection = require("../connection");

const getModelImages = async () => {
    const [result] = await
        connection
            .query("SELECT * FROM image LEFT JOIN component ON image.component_idcomponent = component.idcomponent;");
    return result;
};
const getModelImagesMax = async () => {
    const [result] = await
        connection
            .query("SELECT MAX(idimage) AS max FROM image;");
    return result;
};
const getModelImageById = async (id) => {
    const [result] = await
        connection
            .query('SELECT * FROM image WHERE idimage = ?', [id]);
    return result;
};
const postModelImage = async (image_name, component_idcomponent) => {
    const result = await
        connection
            .query("INSERT INTO image (image_name, component_idcomponent) VALUES (?,?)", [image_name, component_idcomponent]);
    return result;
};
const deleteModelImageById = async (id) => {
    const [result] = await
        connection
            .query("DELETE FROM image WHERE idimage = ?", [id]);
    return result;
};

module.exports = {
    getModelImages,
    getModelImagesMax,
    getModelImageById,
    postModelImage,
    deleteModelImageById,
};