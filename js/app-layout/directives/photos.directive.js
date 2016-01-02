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
        <p class="likes"> <i class="fa fa-heart"></i> {{ photo.likes }}</p>
      </div>
    `,

    // controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      
      // On click show heart
      element.on('dblclick', () => {
        element.find('div').removeClass('hidden').addClass('shown');
        $timeout(function () {
          element.find('div').removeClass('shown').addClass('hidden');
        }, 1000);

        // Like counter
        PhotosService.addLike(scope.photo).then( (res) => {
          console.log('clicked!');
          //console.log(res);
        });
      });
    }
  };

};

sarahPhoto.$inject = ['PhotosService', '$timeout'];

export default sarahPhoto;