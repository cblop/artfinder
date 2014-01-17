'use strict';

/* Directives */


/*
angular.module('artBrowser.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]);
*/

angular.module('artBrowser.directives', [])
.directive('timelineJs',  function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
            var postpone = $timeout(function(){}, 0);
            scope.$watch('events', function(newValue, oldValue){
                if(newValue){
                    elem.children().remove();
                    console.log(elem.contents());
                    postpone = $timeout(function() {
                        createStoryJS({
                            type:       'timeline',
                            width:      '100%',
                            height:     '600',
                            source:     newValue,
                            embed_id:   'timeline-embed',
                            css:        'css/timeline.css',
                            js:         'js/timeline.js'
                        });
                    }, 0);
                    console.log("Running timelineJS");
            }
        });
    }
}});
