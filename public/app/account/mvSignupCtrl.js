angular.module('app').controller('mvSignupCtrl', function($scope, $location, mvNotifier, mvAuth) {
    $scope.signup = function() {
        var newUserData = {
            userName: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        mvAuth.createUser(newUserData).then(function() {
            mvNotifier.notify('User account created!');
            $location.path('/');
        }, function(reason) {
            mvNotifier.error(reason);
        });
    };
});