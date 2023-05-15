const connection = require("../connection");

const getModelComponents = async () => {
    const [result] = await
        connection
            .query("SELECT * FROM component;");
    return result;
};
const getModelComponentById = async (id) => {
    const [result] = await
        connection
            .query('SELECT * FROM component WHERE idcomponent = ?', [id]);
    return result;
};
const postModelComponent = async (component_name) => {
    const result = await
        connection
            .query("INSERT INTO component (component_name) VALUES (?)", [component_name]);
    return result;
};
const deleteModelComponentById = async (id) => {
    const [result] = await
        connection
            .query("DELETE FROM component WHERE idcomponent = ?", [id]);
    return result;
};

module.exports = {
    getModelComponents,
    getModelComponentById,
    postModelComponent,
    deleteModelComponentById,
};