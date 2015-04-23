/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, jQuery, DataFactory, newsFeed, x2js*/
newsFeed.controller("FeedsController", ["$scope", "$http", "DataFactory",
    function ($scope, $http, DataFactory) {
        "use strict";
        
        $scope.selected = null;
        
        $scope.setSelected = function(item){
                
                $scope.selected = item;
                console.log($scope.selected);
        
        };
        var callback = function (jsonData) {
            console.log('JSON DATA:', jsonData);
                $scope.data = jsonData.item;
                /*var url = ['media:thumbnail'][1]._url;*/
                /*$scope.data + url;*/
                /*$scope.title = $scope.data[0].title;*/
/*
                $scope.description = $scope.data[0].description;
*/
            
                console.log('JSON DATA callback', jsonData.item[0]);
                console.log('JSON DATA Test', $scope.data[0].description);
            }
            DataFactory.getData(callback);
    }
]);