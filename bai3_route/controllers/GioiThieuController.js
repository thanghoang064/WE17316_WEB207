window.GioiThieuController = function($scope,$routeParams,$http) {
    // $routeParams là đối tượng chứa giá trị param trên url 
    // console.log($routeParams.name1);
    // tạo ra 1 đối tượng kiểm tra dữ liệu
    $scope.kiemTraDuLieu = {
        ten:false,
        tuoi:false
    }
    //$http là giao thức call API 
    let apiUrl = "http://localhost:3000/hihi";//định nghĩa đường dẫn  API mà mình muốn gọi 
    $scope.getData = function(){
        $http.get(apiUrl).then(function (response){
            // khi gọi thành công trả về 1 đối tượng ở trong response 
           // console.log(response.data);
           if(response.status == 200) {
                $scope.danhsach = response.data;
           }
        })
    }
    $scope.getData();
    // $scope.danhsach = [
    //     {id:1,ten:"Nguyễn Văn A",tuoi:20},
    //     {id:2,ten:"Nguyễn Văn B",tuoi:21}
    // ]
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
                // for(let i = 0;i<$scope.danhsach.length;i++) {
                //     if($scope.danhsach[i].id == editId) {
                //         $scope.danhsach[i].ten = $scope.inputValue.ten;
                //         $scope.danhsach[i].tuoi = $scope.inputValue.tuoi;
                //     }
                // }
                // khai báo đối tượng sửa
                let updateItem  = {
                    ten:$scope.inputValue.ten,
                    tuoi:$scope.inputValue.tuoi
                }
                $http.put(
                    `${apiUrl}/${editId}`, //đường dẫn url sửa theo id
                    updateItem // 
                ).then(function(response){
                    if(response.status == 200) {
                        //gọi lại hàm getData để call lại dữ liệu mới nhất
                        // từ json server về 
                        $scope.getData();
                    }
                })
                $scope.onClose();
                return;
            }
            // xử lý thêm  
            // let ds = $scope.danhsach;
            //fake id 
            // let newId = ds.length > 0 ? ds[ds.length-1].id + 1 : 1;
            let newItem = {
                // id:newId,
                ten: $scope.inputValue.ten,
                tuoi: $scope.inputValue.tuoi 
            }
            $http.post(
                apiUrl,//Đường dẫn API 
                newItem // dữ liệu mới để thêm
            ).then(
                function (response) {
                    // console.log(response);
                    $scope.getData();
                }
            )
            //thực hiện push đối tượng vào array 
            // $scope.danhsach.push(newItem);
            $scope.onClose();
        }
    }
    $scope.onEdit = function(editId) {
        $scope.editId = editId;
        //gọi api 
        $http.get(`${apiUrl}/${editId}`).then(function(response){
            // console.log(response);
            if(response.status == 200){ // thành công
                $scope.inputValue = {
                    ten:response.data.ten,
                    tuoi:response.data.tuoi
                }
            }
        })
        //tạo ra 1 đối tượng sửa 
        // let editItem = {
        //     ten:"",
        //     tuoi:""
        // }
        // for(let i = 0;i < $scope.danhsach.length; i++) {
        //     if($scope.danhsach[i].id == editId) {
        //         editItem.ten = $scope.danhsach[i].ten;
        //         editItem.tuoi = $scope.danhsach[i].tuoi;
        //     }  
        // }
        // bắn dữ liệu lên form 
        // $scope.inputValue = {
        //     ten:editItem.ten,
        //     tuoi:editItem.tuoi
        // }
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