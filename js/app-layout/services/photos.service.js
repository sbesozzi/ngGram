let PhotosService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/photos';

  this.getPhotos = getPhotos;

  this.addHeart = addHeart;

  function getPhotos () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addHeart () {
    
  }
  
};

PhotosService.$inject = ['$http', 'PARSE'];

export default PhotosService;