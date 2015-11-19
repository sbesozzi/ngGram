let sarahPhoto = function($state, PhotosService) {
  
  return {
    restrict: 'AE',
    scope: {
      photo: '=photo'
    },
    template: `
      <ul>
        <li>
          <img ng-src="{{ photo.photo }}">

          <span><i class="fa fa-heart shown"></span>
          
          <a class="likes">{{ photo.likes }}<i class="fa fa-heart"></i></a>
        </li>
      </ul>
    `,
    link: function (scope, element, attrs) {
      element.on('click', function () {
        PhotosService.addHeart(scope.photo).then( (res) => {
          console.log(res);
        });
      });
    }
  };

};

sarahPhoto.$inject = ['$state','PhotosService'];

export default sarahPhoto;