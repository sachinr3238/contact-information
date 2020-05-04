
angular.module('contactApp', []).controller('contactController', function ($scope) {
    // global varibles defined
    $scope.items = [];
    $scope.item = {};

    // add filled contact on add contact button
    $scope.addContact = () => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.]{4,})+\.([A-Za-z]{2,4})$/;
        if (!reg.test($scope.item.email)) {
            $scope.emailValid = true;
        }
        else {
            if ($scope.editMode == true) {
                $scope.items[$scope.editing] = $scope.item;
            } else {
                $scope.items.push($scope.item);

            }
            $scope.reset()
        }
    }

    // deleting the row on delete icon
    $scope.removeItem = (index) => {
        var result = confirm("Are you sure you want to delete?")
        if (result) {
            $scope.items.splice(index, 1)
        }
    }

    // edit the information on edit icon
    $scope.editItem = (data) => {
        $scope.editMode = true;
        $scope.item = angular.copy(data);
        $scope.editing = $scope.items.indexOf(data);
    }

    // phone number validation
    $scope.numberOnly = (event) => {
        if (isNaN(String.fromCharCode(event.keyCode))) {
            event.preventDefault();
        }
    }

    // reseting the fields
    $scope.reset = () => {
       
        $scope.item = {};
        $scope.emailValid = false;
        $scope.item.status = 'active';
        $scope.editMode = false;
    }

});
