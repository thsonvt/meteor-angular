if (Meteor.isClient) {
  angular.module('simple-todos', ['angular-meteor']);

  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', function($scope){    
    $scope.tasks = [
      {text: 'this is task 1'},
      {text: 'this is task 2'},
      {text: 'this is task 3'}
    ];
  }]);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
