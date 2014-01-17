'use strict';

/* Controllers */

angular.module('artBrowser.controllers', []).
	controller('CatListCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
		$scope.alerts = [];
		$scope.flat = false;
		$scope.searchText = "";
		$http.get('cats/location.json').success(function(data) {
			$scope.location_data = data['children'];
		});
		$http.get('cats/era.json').success(function(data) {
			$scope.era_data = data['children'];
		});
		$http.get('cats/genre.json').success(function(data) {
			$scope.genre_data = data['children'];
		});
		$http.get('cats/media.json').success(function(data) {
			$scope.media_data = data['children'];
		});
		$http.get('cats/artlinks.json').success(function(data) {
			$scope.artists = data;
		});
		$http.get('cats/flat.json').success(function(data) {
			$scope.flat_data = data['children'];
		});
		  $scope.tabs = [
		    { title:"Locations", page:"partials/catlist.html" },
		    { title:"Eras", content:"Dynamic content 2" },
		    { title:"Genres", content:"Dynamic content 3" },
		    { title:"Media", content:"Dynamic content 4" }
		  ];
		  $scope.closeAlert = function(index) {
		  	$scope.alerts.splice(index, 1);
		  };
		  $scope.resetSearch = function(){$scope.searchText = "";}
		/*
		$http.get('artists/744040-timeline.json').success(function(data) {
			console.log($scope.events);
		});
		*/
		function addAlert(value){
			$scope.alerts.push({type:'success', message: value})
		}
		$scope.changeEvents = function(events){
			$scope.events = events;
		};	
		$scope.resetAlerts = function() {
			$scope.alerts = [];
			$scope.resetSearch();
		}
		$scope.artFilter = function(element) {
			var detected = 0;
			var pass = false;
			for (var i = $scope.alerts.length - 1; i >= 0; i--) {
				if (element.links.indexOf($scope.alerts[i].message) >= 0) {
					detected += 1;
				}
			};
			if (detected === $scope.alerts.length) {
				pass = true;
			}
			return pass;
		}

		$scope.open = function (artist) {

			var modalInstance = $modal.open({
				templateUrl: 'partials/details.html',
				controller: ModalInstanceCtrl,
				resolve: {
					artist: function () {
						return artist;
					}
				}
			});
		};
		//$scope.events = 'artists/744040-timeline.json';
		var ModalInstanceCtrl = function ($scope, $modalInstance, artist) {

			$scope.artist = artist;

			$scope.ok = function () {
				//$modalInstance.close();
				$modalInstance.dismiss('cancel');
			};

			/*
			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
			*/
		};

}]).controller('FlatListCtrl', ['$scope', '$http', '$modal', function($scope, $http, $modal) {
		$scope.alerts = [];
		$scope.flat = true;
		$scope.searchText = "";
		$http.get('cats/location.json').success(function(data) {
			$scope.location_data = data['children'];
		});
		$http.get('cats/era.json').success(function(data) {
			$scope.era_data = data['children'];
		});
		$http.get('cats/genre.json').success(function(data) {
			$scope.genre_data = data['children'];
		});
		$http.get('cats/media.json').success(function(data) {
			$scope.media_data = data['children'];
		});
		$http.get('cats/artlinks.json').success(function(data) {
			$scope.artists = data;
		});
		$http.get('cats/flat.json').success(function(data) {
			$scope.flat_data = data['children'];
		});
		  $scope.tabs = [
		    { title:"Locations", page:"partials/catlist.html" },
		    { title:"Eras", content:"Dynamic content 2" },
		    { title:"Genres", content:"Dynamic content 3" },
		    { title:"Media", content:"Dynamic content 4" }
		  ];
		  $scope.closeAlert = function(index) {
		  	$scope.alerts.splice(index, 1);
		  };
		  $scope.resetSearch = function(){$scope.searchText = "";}
		/*
		$http.get('artists/744040-timeline.json').success(function(data) {
			console.log($scope.events);
		});
		*/
		function addAlert(value){
			$scope.alerts.push({type:'success', message: value})
		}
		$scope.changeEvents = function(events){
			$scope.events = events;
		};	
		$scope.resetAlerts = function() {
			$scope.alerts = [];
			$scope.resetSearch();
		}
		$scope.artFilter = function(element) {
			var detected = 0;
			var pass = false;
			for (var i = $scope.alerts.length - 1; i >= 0; i--) {
				if (element.links.indexOf($scope.alerts[i].message) >= 0) {
					detected += 1;
				}
			};
			if (detected === $scope.alerts.length) {
				pass = true;
			}
			return pass;
		}

		$scope.open = function (artist) {

			var modalInstance = $modal.open({
				templateUrl: 'partials/details.html',
				controller: ModalInstanceCtrl,
				resolve: {
					artist: function () {
						return artist;
					}
				}
			});
		};
		//$scope.events = 'artists/744040-timeline.json';
		var ModalInstanceCtrl = function ($scope, $modalInstance, artist) {

			$scope.artist = artist;

			$scope.ok = function () {
				//$modalInstance.close();
				$modalInstance.dismiss('cancel');
			};

			/*
			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
			*/
		};

}]);
	/*
.controller('TimelineCtrl', ['$scope', '$http', function($scope, $http) {
		//$scope.artname = routeParams.artist;
		$http.get('artists/timeline.json').success(function(data) {
	    $scope.events = data;
  });
*/
/*
.controller("TabsCtrl", function ($scope) {
  $scope.tabs = [
    { title:"Locations", page:"partials/catlist.html" },
    { title:"Eras", content:"Dynamic content 2" },
    { title:"Genres", content:"Dynamic content 3" },
    { title:"Media", content:"Dynamic content 4" }
  ];

  $scope.alertMe = function() {
    setTimeout(function() {
      alert("You've selected the alert tab!");
    });
  };

  $scope.navType = 'pills';
});
  */

