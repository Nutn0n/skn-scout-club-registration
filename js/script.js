angular.module('ScoutSelection', []) /*  ng-app */

  .controller('SelectionContoller', ['$scope', function($scope) {

    $scope.check = function() {

      if(  $scope.StudentID.length<5 ){
        sweetAlert("ขออภัย", "เลขประจำตัวที่กรอกไม่มีอยู่ในระบบ หรือกรอกเลขประจำตัวไม่ถูกต้อง กรุณาลองกรอกหมายเลขประจำตัวใหม่อีกครั้ง", "error");
      }


       if(  $scope.StudentID == 24998  ){
        swal("ยินดีด้วย", "นายณัฐนนท์​ ดวงสูงเนิน  หมายเลขประจำตัว "+$scope.StudentID+" ได้รับเลือกให้เข้าร่วมเป็นสต๊าฟกิจกรรมลูกเสือ กรุณาติดตามข่าวสารเพิ่มเติมจากชุมนุมลูกเสือ", "success")
      }


      //  put your if here! heee


      else {
        swal("เสียใจด้วย", "คุณหมายเลขประจำตัว "+ $scope.StudentID +" เราไม่พบรายชื่อของคุณในผู้ที่ผ่านการคัดเลือก โปรดอย่าเสียใจ ขอบคุณที่ให้ความสนใจ และโปรดติดตามข่าวสารจากทางชุมนุมต่อไป")
      }



    };

  }]);
