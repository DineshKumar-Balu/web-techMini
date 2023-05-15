const { connectdb } = require('./connect');
const { Movie } = require('./schema');
const controller = require('./controller');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

connectdb()
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

app.post('/api/movies', controller.insertMovie);
app.get('/api/movies', controller.getAllMovies);
app.get('/api/movies/:movieId', controller.getMovie);
app.put('/api/movies/:movieId', controller.updateMovie);
app.delete('/api/movies/:movieId', controller.deleteMovie);

const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
