import angular from 'angular'
import 'angular-ui-router'
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'angular-animate/angular-animate'
import './style/main.scss'

import HomeController from './home/'
import MovieService from './services/MovieService'
import Router  from './router'

angular
  .module( 'imdb-app', ['ui.router', 'ngAnimate'] )
  .controller( 'HomeController', HomeController )
  .service( 'MovieService', MovieService )
  .config( Router );