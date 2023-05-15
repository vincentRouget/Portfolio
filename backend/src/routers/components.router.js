const express = require('express');
const router = express.Router();
const componentsController = require("../controllers/components.controller.js");

router.get("/", componentsController.getComponents);
router.get("/:id", componentsController.getComponentById);
router.post("/", componentsController.postComponent);
router.delete("/:id", componentsController.deleteComponentById);

module.exports = router;