let PhotoService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/photos';

  this.addPhoto = addPhoto;

  function Photo (photoObj) {
    this.photo = photoObj.photo;
  }

  function addPhoto (photoObj) {
    let p = new Photo(photoObj);
    return $http.post(url, p, PARSE.CONFIG);
  }

};



PhotoService.$inject = ['$http', 'PARSE'];

export default PhotoService;