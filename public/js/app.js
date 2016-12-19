/**
 * Created by Ting on 11/27/16.
 */
var app = angular.module('product', []);

app.service('TmpService', function(){
    var cart={};
    this.totalPrice=0;
    this.totalQuantity =0;

    this.cacheCart = function(items){
        cart = items;
    };
    this.getCart = function(){
        return cart;
    };
    this.addItem=function(item){
        if (cart[item.sku] != undefined){
            cart[item.sku]['cart_quantity']+=1;
        }
        else{
            cart[item.sku] = item;
            item['cart_quantity'] = 1;
        };
        if (cart.hasOwnProperty(item.sku)) {
            this.totalPrice += cart[item.sku].price ;
            this.totalQuantity+=1;
        };

    };
    this.updateCart=function(){
        this.totalPrice = 0;
        this.totalQuantity=0;
        for (var key in cart) {
            if (cart.hasOwnProperty(key)) {
                this.totalPrice += cart[key].price * cart[key].cart_quantity;
                this.totalQuantity += cart[key].cart_quantity;
            }
        }
    }
    this.removeItem=function(sku){
        delete cart[sku];
        this.updateCart();
    }
});
app.controller('productCtrl',function ($scope, TmpService) {
        $scope.categoryModel = {
            name:'necklace'
        };
        $scope.items = local_data;

        $scope.brandModel = {
            LiaSophia: true,
            LuckyBrand: true,
            KateSpade: true,
            Brighton: true,
            handmade: true,
            unbranded:true
        };
        $scope.cartItems = TmpService.getCart();
        $scope.totalPrice = TmpService.totalPrice;
        $scope.totalQuantity=TmpService.totalQuantity;
        $scope.addItem = function (item) {
            TmpService.addItem(item);
            $scope.totalPrice = TmpService.totalPrice;
            $scope.totalQuantity=TmpService.totalQuantity;
        };

        $scope.filterByProperties = function filterByProperties(item) {
            var category = item.category;
            var brand = item.brand;
            return $scope.categoryModel.name==category & $scope.brandModel[brand];

        };
        $scope.updateCart=function(item){
            console.log(item);
            TmpService.updateCart();
            $scope.totalPrice = TmpService.totalPrice;
            $scope.totalQuantity=TmpService.totalQuantity;
        };
        $scope.removeItem=function(sku){
            TmpService.removeItem(sku);
            $scope.totalPrice = TmpService.totalPrice;
            $scope.totalQuantity=TmpService.totalQuantity;
        };
    });

function viewCart() {
    $('#product').hide();
    $('#cart').show();
};

function continueShopping(){
    $('#cart').hide();
    $('#product').show();
};



