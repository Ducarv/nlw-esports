import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json([
        { id: 1, name: "anuncio 1" },
        { id: 2, name: "anuncio 2" },
        { id: 3, name: "anuncio 3" },
    ])
})

app.listen(3000, () => {
    console.log("Server is running");
})