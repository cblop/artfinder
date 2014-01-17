'use strict';


// Declare app level module which depends on filters, and services
angular.module('artBrowser', ['artBrowser.filters', 'angularTreeview', 'artBrowser.services', 'artBrowser.directives', 'artBrowser.controllers', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/timeline:artist', {templateUrl: 'partials/timeline.html', controller: 'TimelineCtrl'});
    $routeProvider.when('/timeline', {templateUrl: 'partials/timeline.html', controller: 'TimelineCtrl'});
    $routeProvider.when('/catlist', {templateUrl: 'partials/catlist.html', controller: 'CatListCtrl'});
    $routeProvider.when('/flatlist', {templateUrl: 'partials/flatlist.html', controller: 'FlatListCtrl'});
    //$routeProvider.when('/facets', {templateUrl: 'partials/tabs.html', controller: 'TabsCtrl'});
    $routeProvider.otherwise({redirectTo: '/catlist'});
  }]);
