const { Movie } = require('./schema');

module.exports.insertMovie = async (req, res) => {
  const { title, description, releaseDate, duration, genre, director, cast, posterUrl } = req.body;

  try {
      const existingMovie = await Movie.findOne({ title });
      if (existingMovie) {
          return res.send({ msg: "Movie already exists in the database" });
      }

      const movie = new Movie({
          title,
          description,
          releaseDate,
          duration,
          genre,
          director,
          // cast,
          posterUrl,
      });

      const savedMovie = await movie.save();
      res.send(savedMovie);
  } catch (error) {
      console.error(error);
      res.status(500).send({ msg: "An error occurred while saving the movie" });
  }
};

module.exports.getMovie = async (req, res) => {
    try {
        const movie = await Movie.findOne({ movieId: req.params.movieId });
        if (movie) {
            res.send(movie);
        } else {
            res.send({ msg: "Movie not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "An error occurred while fetching the movie" });
    }
};

module.exports.updateMovie = async (req, res) => {
    try {
        const movie = await Movie.findOneAndUpdate({ movieId: req.params.movieId }, { price: req.body.price });
        if (movie) {
            res.send("Updated successfully");
        } else {
            res.send("Movie not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "An error occurred while updating the movie" });
    }
};

module.exports.deleteMovie = async (req, res) => {
    try {
        const movie = await Movie.findOneAndDelete({ movieId: req.params.movieId });
        if (movie) {
            res.send("Deleted");
        } else {
            res.send("Movie not found");
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "An error occurred while deleting the movie" });
    }
};
