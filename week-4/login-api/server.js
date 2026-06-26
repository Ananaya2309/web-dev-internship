const express = require("express");
const app = express();
app.use(express.json());
let users = [];
let contacts = [];
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
app.post("/register", (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {

        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });

    }

    const userExists = users.find(user => user.email === email);

    if (userExists) {

        return res.status(400).json({
            success: false,
            message: "User already exists"
        });

    }

    users.push({
        name,
        email,
        password
    });

    res.status(201).json({
        success: true,
        message: "Registration Successful",
        user: {
            name,
            email
        }
    });

});
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {

        return res.status(400).json({
            success: false,
            message: "Please fill all fields"
        });

    }

    contacts.push({
        name,
        email,
        message
    });
    res.status(201).json({
        success: true,
        message: "Message Sent Successfully",
        data: {
            name,
            email,
            message
        }
    });
});

