const dotenv = require("dotenv");
dotenv.config();

var path = require("path")
const express = require("express")
const bodyParser = require("body-parser")
const fetch = require("node-fetch");

// Start up an instance of app
const app = express()

const cors = require("cors");

app.use(express.static("dist"))
console.log(__dirname)

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.listen(8081, () => {
    console.log("Listening on port 8081!")
})

// API
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?"
const apiKey = process.env.API_KEY
let userInput = []

app.get("/", (req, res) => {
    res.sendFile("dist/index.html")
})

// POST Route
app.post("/api", async (req, res) => {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`;

    const response = await fetch(apiURL);
    const meaningcloudData = await response.json();
    console.log(meaningcloudData);
    res.send(meaningcloudData);
})