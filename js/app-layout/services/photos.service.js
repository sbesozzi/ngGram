let PhotosService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/photos';

  this.getPhotos = getPhotos;

  function getPhotos () {
    return $http.get(url, PARSE.CONFIG);
  }
  
};

PhotosService.$inject = ['$http', 'PARSE'];

export default PhotosService;