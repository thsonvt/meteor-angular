Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {
  angular.module('simple-todos', ['angular-meteor']);

  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', '$meteor', 

    function($scope, $meteor){    
      $scope.tasks = $meteor.collection(function() {
        return Tasks.find({}, {sort: {createdAt: -1}})
      });

      $scope.addTask = function  (newTask) {
        $scope.tasks.push({
          text: newTask,
          craetedAt: new Date()
        });
      };

  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
