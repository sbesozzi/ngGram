let HomeController = function(PhotosService) {
  
  let vm = this;

  vm.photos = [];

  getPhotos();

  function getPhotos () {
    PhotosService.getPhotos().then( (res) => {
      // console.log(res);
      vm.photos = res.data.results;
    });
  }

};

HomeController.$inject = ['PhotosService'];

export default HomeController;