const axios = require('axios');

exports.getMovies = async (req, res) => {
  try {
    const response = await axios.post('https://hoblist.com/api/movieList', {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting'
    });
    res.send(response.data);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};
