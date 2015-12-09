let PhotosService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/photos';

  this.getPhotos = getPhotos;
  this.addLike = addLike;

  function photo(photoObj) {
    this.photo = photoObj.photo;
    this.likes = (photoObj.likes) ? 0 : Number(objectId.likes);
  }

  function getPhotos () {
    return $http.get(url, PARSE.CONFIG);
  }

  // Like counter
  function addLike (photoObj) {
    console.log('liked');
    photoObj.likes = photoObj.likes + 1;
    return $http.put(url + '/' + photoObj.objectId, photoObj, PARSE.CONFIG);
  }

};

PhotosService.$inject = ['$http', 'PARSE'];

export default PhotosService;