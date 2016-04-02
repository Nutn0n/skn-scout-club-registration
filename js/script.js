angular.module('ScoutSelection', []) /*  ng-app */

  .controller('SelectionContoller', ['$scope', function($scope) {

    $scope.check = function() {

      if(  $scope.StudentID > 99999 || $scope.StudentID < 10000  ){
        alert("เลขประจำตัวไม่ถูกต้อง");
      }

    };

  }]);
