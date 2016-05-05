
const MovieService = ($http) => ({
  getAllMovies(title){
    return $http.get(`https://www.omdbapi.com/?s=${title}&type=movie`)
  },
  getMovie(id){
    return $http.get(`https://www.omdbapi.com/?i=${id}&type=movie`)
  }
});

export default [ '$http', MovieService ]