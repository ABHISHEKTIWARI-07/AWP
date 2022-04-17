 var myApp=angular.module('myApp', []);

  myApp.controller('myCtrl', function($scope) {
    $scope.todos = [
      {text:'AngularJS', done:false},
      {text:'Mobile Application Development', done:false},
      {text:'Mathematics', done:true},
      {text:'Cryptography And Network Security', done:false},
      {text:'Software Engineering', done:false}];
 
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
     
    };
 
    $scope.remaining = ()=> {
      var count = 0;
      var h3 = document.getElementById('h3');
      let box = document.getElementById('box');

      if($scope.todos.length==0){
        h3.style.display = 'block';
        h3.style.textAlign = 'center';
        box.style.visibility = 'hidden';
      }

      else{
        h3.style.display='none';
        box.style.visibility = 'visible';
      }

      angular.forEach($scope.todos, todo=> {
        // count += todo.done ? 0 : 1;

        if(todo.done){
          count+=0;
        }
        else count+=1;

      });
      return count;
    };

    $scope.deleteAll = function() {
      $scope.todos = [];
    }
 
    $scope.delete = function() {
      var alltodo = $scope.todos;
      $scope.todos = [];
      angular.forEach(alltodo, function(todo)  {
        if (!todo.done) $scope.todos.push(todo);
      });
    };

    $scope.removeItem = function(index){
      $scope.todos.splice(index, 1);
    }

  });