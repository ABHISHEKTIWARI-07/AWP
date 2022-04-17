angular
    .module("myApp.controller",[])
    
    .controller(
        "book.controller",
        function($scope,$rootScope){
            // const url = "book.json";
            // $http.get(url).then(function(response){
            //     $scope.myData = response.data;
            //     console.log('$scope.myData');
            // })        

        $scope.removeItem = function(index){
            $rootScope.myData.splice(index, 1);
          }

          $scope.editDetail = function(data){
              $scope.newBook = data;
              console.log($scope.newBook)
          }
    })

    .controller(
        "bookview",
        function ($scope, $rootScope, $routeParams) {
            let bookId = $routeParams.bookId;
      
            $scope.book = $rootScope.myData.find((book) => {
              return book.bookId == bookId;
            });
        }
    )

    .controller(
        "addnewbook.controller",
        function($rootScope){
            $rootScope.addbook = function(){
                $rootScope.myData.push({bookId:$rootScope.bookid,bookName:$rootScope.bname,
                                                authorName:$rootScope.aname,
                                                description:$rootScope.description,
                                                price:$rootScope.price
                })
                console.log($rootScope.myData);
            }
        }
        
    )

    .controller(
        "notebook.controller",
        function($scope,$rootScope){
            $scope.removeItem = function(index){
                $rootScope.myData.splice(index, 1);
              }
        }
    )
    .controller(
        "pen.controller",
        function($scope){

        }
    )

    .controller(
        "addbook.controller",
        function($scope){
            
        }
    )
