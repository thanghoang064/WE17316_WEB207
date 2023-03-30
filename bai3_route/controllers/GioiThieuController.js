window.GioiThieuController = function($scope,$routeParams) {
    // $routeParams là đối tượng chứa giá trị param trên url 
    // console.log($routeParams.name1);
    // tạo ra 1 đối tượng kiểm tra dữ liệu
    $scope.kiemTraDuLieu = {
        ten:false,
        tuoi:false
    }
    $scope.onSubmitForm = function() {
        // kiểm tra nếu bỏ trống họ tên 
        if(!$scope.inputValue || !$scope.inputValue.ten) {
            // thì đánh dấu ten lên bằng true
            $scope.kiemTraDuLieu.ten = true;
        }
        // kiểu tra nếu bỏ trống tuổi 
        if(!$scope.inputValue || !$scope.inputValue.tuoi) {
            $scope.kiemTraDuLieu.tuoi = true;
        }
    }
}