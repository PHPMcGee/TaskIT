/*
*	Author: Morne Erasmus
*	Assignment: BSc Mobile	Web	Applications,	Digital	Skills	Academy
*	Student	ID:	?
*	Date: 2017/01/05
*	Ref: https://docs.angularjs.org/api
*/
var TaskITApp = angular.module('TaskITApp', []); //creates the module

TaskITApp.controller('TaskITController',function($scope){ // creating the controller, i preferred not to chain it.
    
    $scope.todoList = [ // creates and initializes a hard coded todolist
        {taskID:'task1',taskTitle:'Develop App',taskDescr:'Research AngularJS and GIT',status:true},
        {taskID:'task2',taskTitle:'Do something else',taskDescr:'Stop sitting infront of computer',status:false}
    ];  
 
    $scope.addTask = function () {
        var num = 0;
        var taskUnique = "";
        taskUnique = "task" + ($scope.todoList.length + 1); 
        $scope.todoList.push({taskID:taskUnique,taskTitle:$scope.taskItemTitle,taskDescr:$scope.taskItemDescr,status:false});
        $scope.taskItemTitle = "";
        $scope.taskItemDescr = "";
    };
    
    angular.forEach($scope.todoList, function(x) {
        if(x.status == false) {
            $scope.outstandingTasks += 1;
        } 
    });
    
    $scope.outstandingList = function () {
       var outstandingTasks = 0;
       $scope.totalItems = 0;
        angular.forEach($scope.todoList,function(todoItem){
            $scope.totalItems += 1;
            if(todoItem.status == false){
                 outstandingTasks += 1;
            }
        });
        return outstandingTasks;
    }    
    
    $scope.removeTask = function (taskNum) {
        var findIndex = -1;
        var found = 0;
        angular.forEach($scope.todoList,function(itm){
           findIndex += 1;
           if(itm.taskID == taskNum) {
               found = findIndex;
           } 
        });
      //  alert(found);
        $scope.todoList.splice(found,1);
    };
    
    $scope.clearTasks = function () {
        $scope.todoList = [];
    };
});