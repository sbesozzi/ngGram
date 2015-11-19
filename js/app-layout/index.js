import angular from 'angular';

import '../app-core/index';

import HomeController from './controllers/home.controller';

import PhotosService from './services/photos.service';
import sarahImage from './directives/photo.directive.js';


angular
  .module('app.layout', [])
  .controller('HomeController', HomeController)
  .service('PhotosService', PhotosService)
  .directive('sarahImage', sarahImage)


;