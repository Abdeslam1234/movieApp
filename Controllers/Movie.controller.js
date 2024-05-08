// create movie

import { Movie } from "../Models/Movie.models.js";

// create
export const createMovie = async (req, res) => {
  const { title, year, poster } = req.body;
  const movie = new Movie({
    title,
    year,
    poster,
  });
  try {
    const newMovie = await movie.save();
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
// get movies
// update
// delete
