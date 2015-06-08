// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic', 'app.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider){
      $stateProvider

          .state('tab', {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html"
          })
          .state('tab.first',{
            'url':'/first',
            views: {
              'first': {
                templateUrl: "templates/tabs-first.html",
                controller:'FirstCtrl'
              }
            }
          })
          .state('tab.second',{
            'url':'/second',
            views: {
              'second': {
                templateUrl: "templates/tabs-second.html",
                controller:'SecondCtrl'
              }
            }
          })
          .state('tab.third',{
            'url':'/third',
            views: {
              'third': {
                templateUrl: "templates/tabs-third.html",
                controller:'ThirdCtrl'
              }
            }
          })
          .state('tab.third-detail1',{
            'url':'/third/detail1',
            views: {
              'third': {
                templateUrl: "templates/tabs-third-detail1.html",
                controller:'ThirdDetail1Ctrl'
              }
            }
          })
          .state('tab.third-detail2',{
            'url':'/third/detail2',
            views: {
              'third': {
                templateUrl: "templates/tabs-third-detail2.html",
                controller:'ThirdDetail2Ctrl'
              }
            }
          });
      $urlRouterProvider.otherwise("/tab/first");

    });
