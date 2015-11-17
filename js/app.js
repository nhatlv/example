'use strict';
var mainCtrl;
angular.module('locatorDemo', [
  'locator','uiGmapgoogle-maps'
])
  .controller('MainCtrl', ['$scope', function ($scope) {

      mainCtrl = $scope;
      // for the map
      $scope.map = {
        center: {
          latitude: 16.071195,
          longitude: 108.218651
        },
        draggable: true,
        zoom: 15
      };
      // map options
      $scope.options = {
        scrollwheel: false,
        panControl: true,
        rotateControl: true,
        scaleControl: true,
        streetViewControl: true
      };

      // map marker
      $scope.marker = {
        id: 0,
        coords: {
          latitude:  16.071195,
          longitude: 108.218651
        },
        options: {
          draggable:true,
          title: 'The KVK Blog',
          animation: 1 // 1: BOUNCE, 2: DROP
        }
      };

      $scope.alertVal = function() {
        if($scope.lookedUpLocation){
          console.log('aa1111'+ $scope.lookedUpLocation.description);
          $scope.marker = {
              id: 0,
              coords: {
                latitude:  $scope.lookedUpLocation.latitude,
                longitude: $scope.lookedUpLocation.longitude
              },
              options: {
                draggable:true,
                title: 'The KVK Blog',
                animation: 1 // 1: BOUNCE, 2: DROP
              }
            };

             $scope.map = {
                center: {
                  latitude:  $scope.lookedUpLocation.latitude,
                  longitude: $scope.lookedUpLocation.longitude
                },
                draggable: true,
                zoom: 15
              };
        }
          

      };

    $scope.$watch('lookedUpLocation', $scope.alertVal, $scope.map);
  }]);
