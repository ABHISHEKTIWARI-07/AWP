var app = angular.module("myApp",[]);

app.filter('capitalized',function(){
    return function(input){
        return (angular.tostring(input)&& input.length>0)?input.charAt(0).toUpperCase()+input.substr(1):input;
    }
});