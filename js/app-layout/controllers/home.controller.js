let HomeController = function(PhotosService) {
  
  let vm = this;

  // vm.photos = [];

  getPhotos();

  function getPhotos () {
    PhotosService.getPhotos().then( (res) => {
      console.log(res);
      vm.photos = res.data.results;
      console.log(vm.photos);
    });
  }

};

HomeController.$inject = ['PhotosService'];

export default HomeController;