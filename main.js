var app = angular.module('myApp', ['ngRoute']);


app.controller('optionCtrl', function($scope, $http) {

    $http.get('options.json').success(function(res) {
       $scope.options =  res;
       $http.get('option_prices.json').success(function(res) {
            $scope.optionPrices =  res;
            $scope.showOpt = combineOptions($scope.options.options,$scope.optionPrices.options);
            $scope.showFile = combineFile($scope.options,$scope.optionPrices);
            $scope.showFile.options = $scope.showOpt;
            $scope.TotalPrice = calculateTotalPrice($scope.showFile);
            $scope.showPricing = true;
        });
    });

    function calculateTotalPrice(obj) {
        var base_price = obj.base_price;
        var inspect_prep_price = obj.inspect_prep_price;
        var personal_delivery_price = obj.personal_delivery_price;
        var optionPrice = 0;

        angular.forEach(obj.options, function(value, key) {
            optionPrice = optionPrice + value.price;
        });

        var TotalPrice = base_price + inspect_prep_price + personal_delivery_price + optionPrice;

        return '$' + TotalPrice;
    }

    var combineItems = function(item1,item2){
          var resultItem = {};
          angular.forEach(item1,function(val,key){
                if(key in item2){
                    resultItem[key] =  item2[key];
                }
                else{
                    resultItem[key] =  item1[key];
                }

          });
          angular.forEach(item2,function(val,key){
                if(!(key in item1)){
                    resultItem[key] =  item2[key];
                }
          });

          return resultItem;
    };


    var combineOptions = function(opt1,opt2){
          var resultOption = combineItems(opt1,opt2);

          return resultOption;
   };

   var combineFile = function(file1,file2){
         var resultFile = combineItems(file1,file2);
         return resultFile;
    };
});


app.filter('orderByPrice', ['$filter', function($filter) {
    return function(items, field, reverse) {
        var filtered = [];
        angular.forEach(items, function(item, key) {
            if('no_ui' in item) {
                return false;
            } else {
                item.optionKey = key;
                filtered.push(item);
            }
        });
        filtered.sort(function (a, b) {
            return (a[field] > b[field] ? -1 : 1);
        });
        if(reverse) {
            filtered.reverse();
        }
        return filtered;
    };
}]);

app.directive('bootstrapSwitch', [
    function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {
                $(element).bootstrapSwitch();

                $(element).on('switchChange.bootstrapSwitch', function(event, state) {
                    if (ngModel) {
                        scope.$apply(function() {
                            ngModel.$setViewValue(state);
                        });
                    }
                });

                scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                    if (newValue) {
                        $(element).bootstrapSwitch('state', true, true);
                    } else {
                        $(element).bootstrapSwitch('state', false, true);
                    }
                });
            }
        };
    }
]);

