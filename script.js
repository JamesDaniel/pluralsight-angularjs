/*global angular*/

var app = angular.module("app", []);

var myCtrl = function ($scope, $http) {
    $scope.test = "hello test";
    
    $http.get("https://api.github.com/users/jamesdaniel").
        then(function (response) {
            $scope.imgUrl = response.data.avatar_url;
        }, function (err) {
            console.log(JSON.stringify(err, null, 2));
        });
    
    $scope.increment = function (number) {
        $scope.number = parseInt(number) + 1;
    };
};

var myCtrl2 = function ($scope, $http) {
    $scope.testing = "testing here mister";
    console.log($scope.testing);
    
    
    $http.get("https://api.github.com/users/angular/repos")
    .then(function (res) {
        $scope.repos = res.data;
    }, function (res) {
        console.log(JSON.stringify(res.data, null, 2));
    })
}

app.controller("myCtrl", ["$scope", "$http", myCtrl]);
app.controller("myCtrl2", ["$scope", "$http", myCtrl2]);