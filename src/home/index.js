/** @namespace this */

class HomeController{
  constructor( $state, MovieService ){
    this.state = $state;
    this.MovieService = MovieService;
  }
  
  handleSearchMovies(input){
    this.MovieService.getAllMovies(input)
      .then(movies =>{
        this.movies = movies.data.Search;
        this.searchInput = null;
    }).then(() =>{
      this.state.go('movies.list');
    })
  }
  
  handleGetMovieDetail(id){
    this.MovieService.getMovie(id)
      .then(movie =>{
        this.movie = movie.data;
        console.log(this.movie);
    }).then(() =>{
      this.state.go('movies.detail');
    })
  }
}

export default [ '$state', 'MovieService', HomeController ]