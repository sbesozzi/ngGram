let HomeController = function(PhotosService) {
  
  let vm = this;

  vm.photos = [];

  getAllPhotos();

  function getAllPhotos () {
    PhotosService.getPhotos().then( (res) => {
      console.log(res);
      vm.photos = res.data.results;
    });
  }

};

HomeController.$inject = ['PhotosService'];

export default HomeController;