const express = require('express')

const app = express();
const PORT = 3000;

app.get("/before-each", (req, res) => {
    console.log("before each");
    res.status(200);
    res.send("before each");
})

app.get("/before-all", (req, res) => {
    console.log("before all");
    res.status(200);
    res.send("before all");
})

app.get("/after-each", (req, res) => {
    console.log("after each");
    res.status(200);
    res.send("after each");
})

app.get("/after-all", (req, res) => {
    console.log("after all");
    res.status(200);
    res.send("after all");
})

app.get("/request/:id", (req, res) => {
    let id = req.params.id;
    console.log("request ");
    res.status(200);
    res.send("request " + req.params.id);
})

app.listen(PORT, (error) => {
    if (!error) {
        console.log("Server running successfully and app is listening on port " + PORT);
    } else {
        console.log("Error occured, server can't start", error);
    }
}, '14.141.47.2')