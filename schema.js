const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  releaseDate: Date,
  duration: Number,
  genre: String,
  director: String,
  cast: [String],
  posterUrl: String,
  // ... other movie fields
});

const theaterSchema = new mongoose.Schema({
  name: String,
  address: String,
  // ... other theater fields
});

const bookingSchema = new mongoose.Schema({
  movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie' },
  theater: { type: mongoose.Schema.Types.ObjectId, ref: 'Theater' },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookingDate: Date,
  seats: [String],
  totalAmount: Number,
  // ... other booking fields
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // ... other user fields
});

const Movie = mongoose.model('Movie', movieSchema);
const Theater = mongoose.model('Theater', theaterSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const User = mongoose.model('User', userSchema);

module.exports = { Movie, Theater, Booking, User };
