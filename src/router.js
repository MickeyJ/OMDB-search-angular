/** @namespace this */

const Router = (
  ($stateProvider, $urlRouterProvider, $locationProvider) =>{
    
    $stateProvider
      .state('movies', {
        url: '/',
        scope: true,
        controllerAs: "vm",
        controller: 'HomeController',
        template: require('./home/_movies.html')
      })
      .state('movies.list', {
        url: 'movies/:search',
        template: require('./home/_movies.list.html'),
        controllerAs: 'vm',
        controller: [ '$state', 'MovieService',
          function($state, MovieService){
            MovieService.getAllMovies($state.params.search)
            .then(movies =>{
              this.movies = movies.data.Search;
              this.searchInput = null;
            })
          }
        ]
      })
      .state('movies.detail', {
        url: 'movie/:id',
        template: require('./home/_movies.detail.html'),
        controllerAs: 'vm',
        controller: [ '$state', 'MovieService',
          function($state, MovieService){
            MovieService.getMovie($state.params.id)
            .then(movie =>{
              this.movie = movie.data;
            });
  }
        ]
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    console.log(process.env.NODE_ENV);
  }
);

export default [ '$stateProvider', '$urlRouterProvider', '$locationProvider' , Router ]
