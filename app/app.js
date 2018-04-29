'use strict';

var app = angular.module('app', ['ui.bootstrap']);

app.controller('myCtl', function($scope, $uibModal) {
	console.log("Init");
	$scope.buttonClicked = function() {
		console.log("Button clicked");
		var modalInstance = $uibModal.open({
			templateUrl: 'myModalContent.html',
			controller: 'ModalInstanceCtrl',
			controllerAs: '$ctrl'
		});
	};

});

app.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, $document) {
	var $ctrl = this;
	$ctrl.ok = function () {
		console.log("Closing with OK");
		$uibModalInstance.close();
	};

	$ctrl.cancel = function () {
		console.log("Closing with Cancel");
		$uibModalInstance.dismiss('cancel');
	};
	$ctrl.addLogo = function() {
		console.log("'Add logo' button clicked");
		var uploadForm = document.createElement('form');
    		var fileInput = uploadForm.appendChild(document.createElement('input'));
		fileInput.type = 'file';
    		fileInput.name = 'images';
   		fileInput.multiple = true;
    		fileInput.click(function() {
			console.log("Click callback called");
		});
	};
	$ctrl.removeLogo = function() {
		console.log("'Remove logo' button clicked");
	};
});
