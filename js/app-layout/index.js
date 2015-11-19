import angular from 'angular';

import '../app-core/index';

import HomeController from './controllers/home.controller';

import PhotosService from './services/photos.service';

angular
  .module('app.layout', [])
  .service('PhotosService', PhotosService)
  .controller('HomeController', HomeController)
;