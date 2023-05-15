const express = require('express');
const router = express.Router();
const imagesController = require("../controllers/images.controllers.js");

const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
const upload = multer({ dest: "public/assets/images/" });

router.post("/", upload.single("image"), (req, res) => {
    const { originalname } = req.file;
    const { filename } = req.file;
    fs
        .rename(`public/assets/images/${filename}`, `public/assets/images/${originalname}`, (err) => {
            if (err) throw err;
            res.send("Image uploaded");
        });
});

router.get("/photo", imagesController.getImages);
router.get("/photo/max", imagesController.getImagesMax);
router.get("/photo/:id", imagesController.getImageById);
router.post("/photo", imagesController.postImage);
router.delete("/photo/:id", imagesController.deleteImageById);

module.exports = router;