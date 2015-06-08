/**
 * Created by Tomokatsu on 15/06/05.
 */
angular.module('app.controllers',[])

.controller('FirstCtrl',['$scope','$ionicModal',function($scope, $ionicModal){
        $ionicModal.fromTemplateUrl('templates/modal.html',{
            scope: $scope,
            animation:'slide-in-up'
        }).then(function(modal){
            $scope.myModal = modal;
        });

    }])
    .controller('SecondCtrl',['$scope',function($scope){

    }])
    .controller('ThirdCtrl',['$scope',function($scope){

    }])
    .controller('ThirdDetail1Ctrl',['$scope',function($scope){

    }])
    .controller('ThirdDetail2Ctrl',['$scope',function($scope){

    }])
