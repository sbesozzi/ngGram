let sarahPhoto = function(PhotosService, $timeout) {
  
  return {
    restrict: 'AE',
    replace : true,
    scope: {
      photo: '='
    },
    template: ` 
      <div class="photo">
        <img ng-src="{{ photo.photo }}">
        <div class="hidden"><i class="fa fa-heart"></i></div>   
        <p class="likes">{{ photo.likes }} likes</p>
      </div>
    `,

    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', () => {
        console.log('clicked!');

        element.find('div').removeClass('hidden').addClass('shown');
        $timeout(function () {
          element.find('div').removeClass('shown').addClass('hidden');
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