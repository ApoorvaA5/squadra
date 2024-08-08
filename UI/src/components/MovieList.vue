<template>
    <div>
      <h2>Movie List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Director</th>
            <th>Language</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="movie in movies" :key="movie._id">
            <td>{{ movie.title }}</td>
            <td>{{ movie.genre }}</td>
            <td>{{ movie.director }}</td>
            <td>{{ movie.language }}</td>
            <td>{{ movie.rating }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        movies: []
      };
    },
    async created() {
      this.fetchMovies();
    },
    methods: {
      async fetchMovies() {
        try {
          const response = await axios.post('http://localhost:3000/api/movies', {
            category: 'movies',
            language: 'kannada',
            genre: 'all',
            sort: 'voting'
          });
          this.movies = response.data.result;
        } catch (err) {
          alert('Error fetching movies: ' + err.message);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  