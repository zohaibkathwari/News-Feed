/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, jQuery, DataFactory, angular, newsFeed*/
newsFeed.controller("FeedsController", ["$scope", "$sce", "DataFactory",
        function ($scope, $sce, DataFactory) {
        "use strict";
        $scope.selected = null;
        $scope.setSelected = function (item) {
            $scope.selected = item;
            $scope.iframeURL = $scope.selected.guid_asArray[0].__text;
            $scope.trustedURL = $sce.trustAsResourceUrl($scope.iframeURL);
            console.log('iframeURL:', $scope.iframeURL);
            console.log('trustedURL:', $scope.trustedURL);
        };
        var callback = function (jsonData) {
            console.log('JSON DATA:', jsonData);
            $scope.data = jsonData.item;
        }
        DataFactory.getData(callback);
    }
]);