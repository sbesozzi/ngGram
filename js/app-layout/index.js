import angular from 'angular';

import '../app-core/index';

import HomeController from './controllers/home.controller';

import PhotosService from './services/photos.service';
import sarahPhoto from './directives/photos.directive';


angular
  .module('app.layout', ['app.core'])
  .controller('HomeController', HomeController)
  .service('PhotosService', PhotosService)
  .directive('sarahPhoto', sarahPhoto)
;