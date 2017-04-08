/*global angular*/

var app = angular.module("app", []);

var myCtrl = function ($scope, $http) {
    $scope.test = "hello test";
    
    $http.get("https://api.github.com/users/jamesdaniel").
        then(function (response) {
            $scope.imgUrl = response.data.avatar_url;
            
        }, function (err) {
            console.log(JSON.stringify(err, null, 2));
        })
};

app.controller("myCtrl", ["$scope", "$http", myCtrl]);