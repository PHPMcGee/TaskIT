/*
*	Author: Morne Erasmus
*	Assignment: BSc Mobile	Web	Applications,	Digital	Skills	Academy
*	Student	ID:	morne.erasmus@digitalskillsacademy.me
*	Date: 2017/01/05
*	Ref: https://docs.angularjs.org/api
*/
var TaskITApp = angular.module('TaskITApp', []); //creates the module

TaskITApp.controller('TaskITController',function($scope){ // creating the controller, i preferred not to chain it.
    
    $scope.taskList = [ // creates and initializes a hard coded taskList
        {taskID:'task1',taskTitle:'Procrastinate',taskDescr:'avoid anything work related',status:true},
        {taskID:'task2',taskTitle:'Repeat Task 1',taskDescr:'Still busy with task 1',status:false}
    ];  
 
    $scope.addTask = function () { // when called it adds(pushes) a new object to the taskList array
        var taskUnique = ""; // initializing a unique ID
        taskUnique = "task" + ($scope.taskList.length + 1); //creates a uniqueID, this is later used to identify which item to splice(remove) from the array
        $scope.taskList.push({taskID:taskUnique,taskTitle:$scope.taskItemTitle,taskDescr:$scope.taskItemDescr,status:false}); //pushes binded info to the array
        $scope.taskItemTitle = ""; // resets the input field to blank
        $scope.taskItemDescr = ""; // resets the input field to blank
    };
      
    $scope.outstandingList = function () { //this function gets the total tasks as well as the outstanding tasks
        var outstandingTasks = 0;
        $scope.totalItems = 0;
        angular.forEach($scope.taskList,function(todoItem){ // looping through array
            $scope.totalItems += 1; // adds 1 for each item
            if(todoItem.status == false){ // checks if checked or not, if checked increment by 1
                outstandingTasks += 1;
            }
        });
        return outstandingTasks; //returns the value
    }    
    
    $scope.removeTask = function (taskNum) { // this function removes a specific task from the array
        var findIndex = -1; //initializes the index counter. set to -1 as arrays start with 0
        angular.forEach($scope.taskList,function(itm){
           findIndex += 1; //increments before comparing
           if(itm.taskID == taskNum) { //compares, if it matches then it removes the specific object from the array. splice(findindex,1) deletes at position findindex and deletes 1 item 
               $scope.taskList.splice(findIndex,1);
           } 
        }); 
    };
    
    $scope.clearTasks = function () { 
        $scope.taskList = []; //initializes array to remove all tasks
    };
});