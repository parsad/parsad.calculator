/*	AngularJS app and controller
	Author: Parvaneh Sadeghi
*/

var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	
	$scope.value = [0,1,2,3,4,5,6,7,8,9,".","+","-","*","/"];
	$scope.result="";
	
	// a function to show all values in the screen
	$scope.display = function(value){
		$scope.result += $scope.value[value];
	};

	//a function to clear screen
	$scope.clear = function(){
		$scope.result = "";
	};

	//a function to calculate operations
	$scope.equal = function(){
		$scope.result = $scope.$eval($scope.result);
	};
});

