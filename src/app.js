import angular from 'angular'
import 'angular-ui-router'
import 'jquery'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'angular-animate/angular-animate'
import 'angular-ui-router-anim-in-out/anim-in-out'
import 'angular-ui-router-anim-in-out/css/anim-in-out.css'
import './style/main.scss'

import HomeController from './home/'
import MovieService from './services/MovieService'
import Router  from './router'

angular
  .module( 'imdb-app', ['ui.router', 'ngAnimate', 'anim-in-out'] )
  .controller( 'HomeController', HomeController )
  .service( 'MovieService', MovieService )
  .config( Router );