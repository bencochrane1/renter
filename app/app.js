angular.module('bondfree',
  [
    'ngStamplay',
    'ui.router',
    'ngAnimate',
    'app.routes',
    'ui.bootstrap',
    'app.authenticate',
    'app.resetpassword',
    'app.admin',
    'app.booking',
    'app.home',
    'app.agency',
    'app.profile',
    'app.room',
    'app.agencydashboard',
    'UserService',
    'BookingService',
    'RoomService',
    'google.places'
  ])

  .controller('MainCtrl', MainCtrl);

  function MainCtrl() {
    var main = this;
    console.log('main')
  }
