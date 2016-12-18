/**
 * Created by Ting on 11/27/16.
 */
var app = angular.module('product', []);
app.controller('productCtrl', ['$scope',function ($scope) {
        $scope.brandModel = {
            LiaSophia: true,
            LuckyBrand: true,
            KateSpade: true,
            Brighton: true,
            handmade: true,
            unbranded:true
        };
        $scope.categoryModel = {
            necklace:true,
            earrings:true,
            ring:true,
            name:''
        };
        $scope.items = local_data;

        $scope.brandModel = {
            LiaSophia: true,
            LuckyBrand: false,
            KateSpade: false,
            Brighton: false,
            handmade: false,
            unbranded:false
        };
        $scope.cartItems = [];
        $scope.totalPrice = 0;
        $scope.addItem = function (item) {
            $scope.cartItems.push(item);
            console.log("Cart Items:");
            console.log($scope.cartItems);
            console.log($scope.cartItems.length);
            console.log($scope.totalPrice);
            var total = $scope.totalPrice;
            $scope.cartItems.forEach(function (item) {
                total += item.price;
            });
            $scope.totalPrice = total;
        };
        $scope.filterByProperties = function filterByProperties(item) {
            var category = item.category;
            var brand = item.brand;
            return $scope.categoryModel.name==category & $scope.brandModel[brand];



            // return true;
        };

    }]);