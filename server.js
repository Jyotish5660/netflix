const express = require('express');
const app = express();
const PORT = 3000;

const movies = [
    {id: 1, title: 'Movie 1' videoSource: 'movie1.mp4'},
    {id: 1, title: 'Movie 2' videoSource: 'movie2.mp4'},
];

app.get('/api/movies', (req, res) => {
    res.json(movies);
});


app.listen(PORT, () => {
    console.log ('Server is running on http://localhost:${PORT}');
});