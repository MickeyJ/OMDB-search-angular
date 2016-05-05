/** @namespace this */

class HomeController{
  constructor( $state, $rootScope, $stateParams, MovieService ){
    this.state = $state;
    this.MovieService = MovieService;
    this.stateParams = $stateParams;
    
    this.speed = 100;
    this.listStyle = 'anim-slide-below-fade';
    this.detailStyle = 'anim-slide-below-fade';

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
    }).then(() =>{
      this.state.go('movies.detail');
    })
  }
}

export default [ '$state', '$rootScope', '$stateParams', 'MovieService', HomeController ]