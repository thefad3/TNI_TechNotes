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
        function lights($scope){
            $scope.lights = ['Power','E1','E2','E3','E4','Wireless','USB','DSL','DSL2','Internet'];
            $scope.selected = [''];
        }
        
        $('#myAlert').on('closed.bs.alert', function () {
          // do something…
        })

})

