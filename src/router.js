
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
        url: 'movies',
        template: require('./home/_movies.list.html')
      })
      .state('movies.detail', {
        url: 'movie',
        template: require('./home/_movies.detail.html')
      });

    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
    console.log(process.env.NODE_ENV);
  }
);

export default [
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider' ,
  Router
]
