require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const { hashPassword, verifyPassword, verifyToken, userPermissionsById, } = require("./src/auth");
const usersRouter = require('./src/routers/users.router');
const imagesRouter = require('./src/routers/images.router');
const componentsRouter = require('./src/routers/components.router');

const port = process.env.APP_PORT ?? 5000;

app.use(cors());
app.use(express.json());

// Les routes MVC :
app.use("/users", usersRouter);
app.use("/images", imagesRouter);
app.use("/components", componentsRouter);

app.use(express.static('public/assets/images'));

// Les routes authentification / token :
app.get("/user-token", (req, res) => {
    const header = req.get("Authorization");
    const [type, token] = header.split(" ");
    if (type !== "Bearer") {
        return res.status(400).send("Token is not bearer");
    }
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const user = payload.sub;
    res.status(200).send(user);
});
app.use(verifyToken);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.error("Something bad happened");
    } else {
        console.warn(`server is listening on ${port}`);
    }
});