/**
 * Created by Titus on 9/26/2014.
 */

angular.module('swapr', ['ui.bootstrap', 'ui.router']);

angular.module('swapr').controller('MainCtrl', function ($scope) {
    $scope.hello = 'hi there!';
});

angular.module('swapr').config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('assignments', {
            url: '/assignments',
            templateUrl: 'templates/assignments.html'
        })
        .state('grades', {
            abstract: true,
            template: '<ui-view />',
            url: '/grades'
        })
        .state('grades.grades', {
            url: '',
            templateUrl: 'templates/grades.html',
            controller: 'GradesCtrl'
        })
        .state('grades.detail', {
            url: '/detail/:id',
            templateUrl: 'templates/grades.detail.html',
            controller: 'GradesDetailsCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'templates/profile.html'
        })
});