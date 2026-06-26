
const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {

    res.send("Login API Server Running ");

});

app.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (
        email === "admin@gmail.com" &&
        password === "123456"
    ) {

        res.json({
            success: true,
            message: "Login Successful"
        });

    } else {

        res.status(401).json({
            success: false,
            message: "Invalid Credentials"
        });

    }

});

app.listen(3000, () => {

    console.log("Server Running On Port 3000");

});

