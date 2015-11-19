let sarahPhoto = function(PhotosService) {
  
  return {
    restrict: 'E',
    scope: {
      photo: '='
    },
    template: `
      <div> 
          <img ng-src="{{ photo.photo }}">
          <span><i class="fa fa-heart shown"></span>
          <a class="liked">{{ vm.photos.likes }}</a>
      </div>
    `,
    controller: 'HomeController as vm',
    // link: function (scope, element, attrs) {
    //   element.on('dblclick', function () {
    //     element.addClass('liked');
    //     $timeout(function () {
    //       element.removeClass('liked');

    //     }, 1000);
    //     PhotosService.addHeart(scope.photo).then( (res) => {
    //       console.log(res);
    //     });
    //   });
    // }
  };

};

sarahPhoto.$inject = ['PhotoService'];

export default sarahPhoto;