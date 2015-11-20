let sarahPhoto = function(PhotosService, $timeout) {
  
  return {
    restrict: 'E',
    scope: {
      photo: '='
    },
    template: ` 
      <div class="photos">
        <img ng-src="{{ photo.photo }}" ng-dblclick="vm.addLike">
        <span class="hidden"><i class="fa fa-heart"></i
>        
        <div class="add-likes">{{ photo.likes }}<i class="fa fa-heart"></i></div>
      </div>
 
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        // console.log('clicked!');
        element.addClass('hidden');
        $timeout(function () {
          element.removeClass('hidden');
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