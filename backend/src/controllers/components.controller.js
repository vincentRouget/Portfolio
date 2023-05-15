const componentsModel = require("../models/components.model.js");

const getComponents = async (req, res) => {
    const Components = await componentsModel.getModelComponents();
    res.status(200).send(Components);
};
const getComponentById = async (req, res) => {
    const id = parseInt(req.params.id);
    const component = await componentsModel.getModelComponentById(id);
    res.status(200).send(component);
};
const postComponent = async (req, res) => {
    const { component_name } = req.body;
    const component = await componentsModel.postModelComponent(component_name);
    res.status(201).send("Component created");
};
const deleteComponentById = async (req, res) => {
    const id = parseInt(req.params.id);
    const component = await componentsModel.deleteModelComponentById(id);
    res.status(200).send("Component deleted");
};

module.exports = {
    getComponents,
    getComponentById,
    postComponent,
    deleteComponentById,
};