angular.module('note', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "view/home.html",
                controller: "homeController"
            })
            .when("/notes", {
                templateUrl: "view/notes.html",
                controller: "notesController"
            })
            .otherwise({
                redirectTo: "/"
            });
})




.controller("homeController", function($scope){
        $scope.goat = 'test';
    
})

.controller("notesController", function($scope){
        $scope.name = {};
    
})

