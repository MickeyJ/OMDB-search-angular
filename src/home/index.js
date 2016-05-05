/** @namespace this */

class HomeController{
  constructor( $state ){
    this.state = $state;
    this.speed = 100;
    this.transitionStyle = 'anim-slide-below-fade';
  }
  handleSearchMovies(input){
    this.state.go('movies.list', {'search': input});
    this.searchInput = null;
  }
}

export default [ '$state', HomeController ]