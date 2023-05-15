const imagesModel = require("../models/images.model.js");

const getImages = async (req, res) => {
    const images = await imagesModel.getModelImages();
    res.status(200).send(images);
};
const getImagesMax = async (req, res) => {
    const max = await imagesModel.getModelImagesMax();
    res.status(200).send(max);
};
const getImageById = async (req, res) => {
    const id = parseInt(req.params.id);
    const image = await imagesModel.getModelImageById(id);
    res.status(200).send(image);
};
const postImage = async (req, res) => {
    const { image_name, component_idcomponent } = req.body;
    const image = await imagesModel.postModelImage(image_name, component_idcomponent);
    res.status(201).send("Image created");
};
const deleteImageById = async (req, res) => {
    const id = parseInt(req.params.id);
    const image = await imagesModel.deleteModelImageById(id);
    res.status(200).send("Image deleted");
};

module.exports = {
    getImages,
    getImagesMax,
    getImageById,
    postImage,
    deleteImageById,
};