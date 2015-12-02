angular
    .module('app.home', [])
    .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope) {

    var home = this;
    home.open = open;
    home.today = today();


    function today() {
        home.dt = new Date();
    };
    

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable dates that have already been picked - this example disables weekends for now
  $scope.disabled = function(date, mode) {
    // return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();
  $scope.maxDate = new Date(2020, 5, 22);

  $scope.openCheckIn = function($event) {
    $scope.status.openedCheckIn = true;
  };

  $scope.openCheckOut = function($event) {
    $scope.status.openedCheckOut = true;
  };  

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MM-yy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];

  $scope.showCheckIn = function(date) {
    console.log('check in: ', date)
  }

  $scope.showCheckOut = function(date) {
    console.log('check out: ', date)
  }

  $scope.status = {
    openedCheckIn: false,
    openedCheckOut: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  $scope.events =
    [
      {
        date: tomorrow,
        status: 'full'
      },
      {
        date: afterTomorrow,
        status: 'partially'
      }
    ];

  $scope.getDayClass = function(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<$scope.events.length;i++){
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  };

  $scope.search = function() {
    console.log('location: ', $scope.searchLocation)
    console.log('check in: ',$scope.dtCheckIn)
    console.log('check out: ', $scope.dtCheckOut)
    console.log('guests: ', $scope.guests)
  }

  $scope.options = [
    { id: 1, value: 1, name: '1 Guest' },
    { id: 2, value: 2, name: '2 Guests' },
    { id: 3, value: 3, name: '3 Guests' },
    { id: 4, value: 4, name: '4 Guests' },
    { id: 5, value: 5, name: '5 Guests' },
    { id: 6, value: 6, name: '6 Guests' },
    { id: 7, value: 7, name: '7 Guests' },
    { id: 8, value: 8, name: '8 Guests' },
    { id: 9, value: 9, name: '9 Guests' },
    { id: 10, value: 10, name: '10 Guests' },
    { id: 11, value: 11, name: '11 Guests' },
    { id: 12, value: 12, name: '12 Guests' },
    { id: 13, value: 13, name: '13 Guests' },
    { id: 14, value: 14, name: '14 Guests' },
    { id: 15, value: 15, name: '15 Guests' },
    { id: 16, value: 16, name: '16+ Guests' }
  ];

  $scope.guest = $scope.options[0];

  $scope.popover = {
    renterTemplateUrl: 'app/components/home/renter-popover.html',
    principalTemplateUrl: 'app/components/home/principal-popover.html'
  }

}








