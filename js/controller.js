/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, jQuery, DataFactory, angular, newsFeed*/
newsFeed.controller("FeedsController", ["$scope", "$http", "DataFactory",
    function ($scope, $http, DataFactory) {
        "use strict";
        $scope.selected = null;
        $scope.setSelected = function (item) {
            $scope.selected = item;    
        };
        var callback = function (jsonData) {
            console.log('JSON DATA:', jsonData);
            $scope.data = jsonData.item;
        }
        DataFactory.getData(callback);
    }
]);