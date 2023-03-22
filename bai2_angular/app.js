 // set angular js cho vùng myapp
 var app = angular.module("myapp",[]);
 //map hàm myFunc với vùng demoController 
//  app.controller("demoController",myFunc);
 //viết tắt 
 app.controller("infoController",function($scope){
     // $scope.name = "nguyen van a";
     // $scope.age = 19;
     // $scope.phone = "09213213";
         $scope.info = [{
             name:"Nguyễn Văn A",
             age:19,
             phone:"09212123"
         },
         {
             name:"Nguyễn Văn B",
             age:20,
             phone:"094332422123"
         }
         ];
         $scope.welcome = "Xin chào";
         $scope.sayHello = function() {
            // $scope.thongbao = $scope.test; // lấy giá trị ở ô input gán vào
            // biến thongbao
            // $scope.thongbao = $scope.doibong;
            // chọn mu -> vô địch 
            // chọn mc -> á quân 
            // chọn arsenal -> chú tư 
            if($scope.doibong == 1) {
                $scope.thongbao = "Vô địch";
            } else if ($scope.doibong == 2) {
                $scope.thongbao = "Á quân";
            } else {
                $scope.thongbao = "Chú tư";
            }
         }
 })
 // tạo 1 vùng div infoController 
 // tạo 1 hàm myInfo map với infoControler và tạo ra các biến 
 //ten,tuoi,sdt 
 //yêu cầu hiển thị ra như trên bảng 