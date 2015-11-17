/**
 * Created by Kasun Kodagoda on 12/26/2014.
 */
angular.module('locatorDemo', ['uiGmapgoogle-maps'])

.controller('MainController', function($scope) {
        // for the map
        $scope.map = {
            center: {
                latitude: 7.0933,
                longitude: 79.9989
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
                latitude:  7.0933,
                longitude: 79.9989
            },
            options: {
                draggable: false,
                title: 'The KVK Blog',
                animation: 1 // 1: BOUNCE, 2: DROP
            }
        };
    });