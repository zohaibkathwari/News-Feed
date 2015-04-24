/*jslint vars: true, plusplus: true, browser: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */
/*global $, jQuery, TestAssignment, angular*/

newsFeed.factory('DataFactory', ['$http', function DataFactory($http) {
    'use strict';
    DataFactory.getData = function (callback) {
        $http.get('/data/data.xml').then(function (response) {
            var xmlData = $(response.data).children()[0];
            var x2js = new X2JS();
            var jsonObject = x2js.xml2json(xmlData);
            callback(jsonObject);
        });
    };
    return DataFactory;
}]);