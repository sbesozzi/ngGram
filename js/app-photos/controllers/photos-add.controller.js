let PhotosAddController = function($state, PhotoService) {

  let vm = this;

  vm.addPhoto = addPhoto;

  function addPhoto (photoObj) {
    PhotoService.addPhoto(photoObj).then( (res) => {
      console.log(res);
      $state.go('root.home');
    });
  }
  
};

PhotosAddController.$inject = ['$state', 'PhotoService'];

export default PhotosAddController;