angular
    .module('app.agency', [])
    .controller('AgencyCtrl', AgencyCtrl);

function AgencyCtrl($scope) {

    $scope.showLogin = true;

    $scope.toggleLoginContainer =function() {
      $scope.showLogin = !$scope.showLogin;
    }

}