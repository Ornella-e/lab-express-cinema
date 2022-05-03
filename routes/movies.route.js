const router = require('express').Router();
const Movie = require('../models/Movie.model');


router.get("/", async (req, res) => {
	try {
		const movies = await Movie.find();
		res.render('movies', { movies });
	} catch (error) {
		console.error(error);
	}
})