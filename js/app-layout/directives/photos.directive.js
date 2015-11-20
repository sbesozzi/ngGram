let sarahPhoto = function(PhotosService, $timeout) {
  
  return {
    restrict: 'E',
    scope: {
      photo: '='
    },
    template: ` 
      <div class="photos">
        <img ng-src="{{ photo.photo }}" ng-dblclick="vm.addLike">
        <span class="hidden"><i class="fa fa-heart"></i>        
      </div>
 
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        // console.log('clicked!');
        element.find('span').removeClass('hidden').addClass('shown');
        $timeout(function () {
          element.find('span').removeClass('shown').addClass('hidden');
        }, 1000);
        PhotosService.addLike(scope.photo).then( (res) => {
          console.log(res);
        });
      });
    }
  };

};

sarahPhoto.$inject = ['PhotoService', '$timeout'];

export default sarahPhoto;