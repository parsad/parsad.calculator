/*	AngularJS app and controller
	Author: Parvaneh Sadeghi
*/

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	
	$scope.value = [0,1,2,3,4,5,6,7,8,9,".","+","-","*","/"];
	$scope.result="";
	
	$scope.display = function(value){
		$scope.result += $scope.value[value];
	};

	$scope.clear = function(){
		$scope.result = "";
	};

	$scope.equal = function(){
		$scope.result = $scope.$eval($scope.result);
	};
});

