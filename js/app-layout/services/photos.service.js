let PhotosService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/photos';

  this.getPhotos = getPhotos;
  this.addLike = addLike;

  function getPhotos () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addLike (photoObj) {
    console.log('photo liked');
    photoObj.likes = photoObj.likes + 1;
    return $http.put(url + '/' + photoObj.objectId, photoObj, PARSE.CONFIG);
  }
  
};

PhotosService.$inject = ['$http', 'PARSE'];

export default PhotosService;