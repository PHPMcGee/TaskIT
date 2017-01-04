
  
var TaskITApp = angular.module('TaskITApp', []);

TaskITApp.controller('TaskITController',function($scope){
    
    $scope.todoList = [{taskTitle:'Develop App',taskDescr:'Research AngularJS and GIT',status:'true'},{taskTitle:'Do something else',taskDescr:'Stop sitting infront of computer',status:'false'}];
    $scope.totalItems = $scope.todoList.length;
    
     angular.forEach($scope.todoList, function(value) {
       value.status);
     });
});
  