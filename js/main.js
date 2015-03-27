angular.module('myApp', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "templates/home.html",
                controller: "homeController"
            })
            .when("/notes", {
                templateUrl: "templates/notes.html",
                controller: "notesController"
            })
            .otherwise({
                 redirectTo: '/'
            });
});