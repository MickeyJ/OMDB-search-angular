/** @namespace this */

class HomeController{
  constructor($state, MovieService){
    this.state = $state;
    this.MovieService = MovieService;
    this.title = 'Search Movie Titles!';
  }
  handleMovieSearch(inputText){
    this.MovieService.getAllMovies(inputText)
      .then(movies =>{
        this.movies = movies.data.Search;
        this.searchInput = null;
    }).then(() =>{
      this.state.go('movies.list');
    })
  }
  getMovie(id){
    this.MovieService.getMovie(id)
      .then(movie =>{
        this.movie = movie.data;
        console.log(this.movie);
    }).then(() =>{
      this.state.go('movies.detail');
    })
  }
  
}

export default ['$state', 'MovieService', HomeController ]