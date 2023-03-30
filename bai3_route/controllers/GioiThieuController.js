window.GioiThieuController = function($scope,$routeParams) {
    // $routeParams là đối tượng chứa giá trị param trên url 
    // console.log($routeParams.name1);
    // tạo ra 1 đối tượng kiểm tra dữ liệu
    $scope.kiemTraDuLieu = {
        ten:false,
        tuoi:false
    }
    $scope.danhsach = [
        {id:1,ten:"Nguyễn Văn A",tuoi:20},
        {id:2,ten:"Nguyễn Văn B",tuoi:21}
    ]
    $scope.onClose = function() {
        $scope.inputValue = {
            ten:"",
            tuoi:""
        }
        $scope.editId = 0;
    }
    $scope.onSubmitForm = function() {
        let flag = true;
        // kiểm tra nếu bỏ trống họ tên 
        if(!$scope.inputValue || !$scope.inputValue.ten) {
            // thì đánh dấu ten lên bằng true
            $scope.kiemTraDuLieu.ten = true;
            flag = false;
        }
        // kiểu tra nếu bỏ trống tuổi 
        if(!$scope.inputValue || !$scope.inputValue.tuoi) {
            $scope.kiemTraDuLieu.tuoi = true;
            flag = false;
        }
        //nếu như ko có lỗi gì thì flag sẽ mặc định là true
        if(flag) {
            //xử lý sửa 
            let editId = $scope.editId;
            //nếu như tồn tại editId
            if(editId) {
                for(let i = 0;i<$scope.danhsach.length;i++) {
                    if($scope.danhsach[i].id == editId) {
                        $scope.danhsach[i].ten = $scope.inputValue.ten;
                        $scope.danhsach[i].tuoi = $scope.inputValue.tuoi;
                    }
                }
                $scope.onClose();
                return;
            }
            // xử lý thêm  
            let ds = $scope.danhsach;
            //fake id 
            let newId = ds.length > 0 ? ds[ds.length-1].id + 1 : 1;
            let newItem = {
                id:newId,
                ten: $scope.inputValue.ten,
                tuoi: $scope.inputValue.tuoi 
            }
            //thực hiện push đối tượng vào array 
            $scope.danhsach.push(newItem);
            $scope.onClose();
        }
    }
    $scope.onEdit = function(editId) {
        $scope.editId = editId;
        //tạo ra 1 đối tượng sửa 
        let editItem = {
            ten:"",
            tuoi:""
        }
        for(let i = 0;i < $scope.danhsach.length; i++) {
            if($scope.danhsach[i].id == editId) {
                editItem.ten = $scope.danhsach[i].ten;
                editItem.tuoi = $scope.danhsach[i].tuoi;
            }  
        }
        // bắn dữ liệu lên form 
        $scope.inputValue = {
            ten:editItem.ten,
            tuoi:editItem.tuoi
        }
    }
    $scope.onDelete = function (deleteId) {
        let confirm = window.confirm("bạn có muốn xóa không ???");
        if(confirm) {
            //xóa 
            $scope.danhsach = $scope.danhsach.filter(
                function(item) {
                    return item.id !== deleteId
                }
            )
        }
    }
}