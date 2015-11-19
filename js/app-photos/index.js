import angular from 'angular';
import '../app-core/index';

import PhotosAddController from './controllers/photos-add.controller';

import PhotoService from './services/photo.service';

angular
  .module('app.photos', ['app.core'])
  .controller('PhotosAddController', PhotosAddController)
  .service('PhotoService', PhotoService)
;