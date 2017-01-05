
var TaskITApp = angular.module('TaskITApp', []);

TaskITApp.controller('TaskITController',function($scope){
    
    //$scope.totalLength = $scope.todoList.length;
    
    $scope.todoList = [
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
  