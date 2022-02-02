 var myApp=angular.module('myApp', []);

  myApp.controller('myCtrl', function($scope) {
    //var todoList = this;
    $scope.todos = [
      {text:'AngularJS', done:false},
      {text:'Mobile Application Development', done:false},
      {text:'Mathematics', done:true}];
 
    $scope.addTodo = function() {

      let search = document.getElementById('search');
      let err = document.getElementById('error');

      if(search.value.trim()==''){
        err.innerHTML='***You have not mention any work...'
        err.style.color = 'red'
      }

      else{
        $scope.todos.push({text:$scope.todoText, done:false});
        $scope.todoText = '';
        err.innerHTML='';
      }

      if(search.value.trim()==$scope.index.text){
        err.innerHTML='***You have already mentioned...'
        err.style.color = 'red'
      }
     
    };
 
    $scope.remaining = function() {
      var count = 0;

      if($scope.todos.length==0){
        var h3 = document.getElementById('h3');
        h3.style.display = 'block';
        h3.style.textAlign = 'center';

        let box = document.getElementById('box');
        box.style.visibility = 'hidden';
        
      }

      else{
        let box = document.getElementById('box');

        box.style.visibility = 'visible';
      }

      angular.forEach($scope.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    $scope.deleteAll = function() {
      $scope.todos = [];
    }
 
    $scope.delete = function() {
      var alltodo = $scope.todos;
      $scope.todos = [];
      angular.forEach(alltodo, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };

    $scope.removeItem = function(index){
      $scope.todos.splice(index, 1);
    }

  });