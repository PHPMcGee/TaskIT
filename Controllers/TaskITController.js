
var TaskITApp = angular.module('TaskITApp', []);

TaskITApp.controller('TaskITController',function($scope){
    
    var taskNmbr = 2;
    
    $scope.todoList = [
        {taskNumber:1,taskTitle:'Develop App',taskDescr:'Research AngularJS and GIT',status:true},
        {taskNumber:2,taskTitle:'Do something else',taskDescr:'Stop sitting infront of computer',status:false}
    ];
 
     $scope.addTask = function () {
        taskNmbr += 1;
        $scope.todoList.push({taskNumber:taskNmbr,taskTitle:$scope.taskItemTitle,taskDescr:$scope.taskItemDescr,status:false});
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
    
    
    $scope.removeTask = function (tester) {
             alert(tester);
    };

    
    
    
});
  