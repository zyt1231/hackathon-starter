/**
 * Created by Ting on 11/27/16.
 */
var app = angular.module('product', []);
app.controller('productCtrl', function ($scope) {
        $scope.items = local_data;
        $scope.cartItems = [];
        $scope.totalPrice = 0;
        $scope.addItem = function (item) {
            $scope.cartItems.push(item);
            console.log("Cart Items:");
            console.log($scope.cartItems);
            console.log($scope.cartItems.length);
            console.log($scope.totalPrice);
            var total = $scope.totalPrice;
            $scope.cartItems.forEach(function(item){
                total += item.price;
            });
            $scope.totalPrice = total;
        };
    }
);