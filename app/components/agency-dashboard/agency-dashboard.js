angular
    .module('app.agencydashboard', [])
    .controller('AgencyDashboardCtrl', AgencyDashboardCtrl);

function AgencyDashboardCtrl() {
    var agency = this;
    agency.today = today();
    agency.clear = clear; 
    agency.disabled = disabled; 
    agency.toggleMin = toggleMin; 
    agency.openCheckIn = openCheckIn; 
    agency.openCheckOut = openCheckOut; 
    agency.setDate = setDate; 
    agency.showCheckIn = showCheckIn; 
    agency.showCheckOut = showCheckOut; 
    agency.getDayClass = getDayClass; 
    agency.toggleTick = toggleTick; 
    agency.ticked = false;

    agency.toggleLogin = toggleLogin;
    agency.loggingIn = false;

    function toggleLogin() {

      if (agency.loginError) {
        agency.loginError = false;
        agency.loggingIn = false;
        return;
      }
      agency.loggingIn = !agency.loggingIn;
      agency.loginError = !agency.loginError;
    }

    function toggleTick() {
        agency.ticked = !agency.ticked;
    }

    function today() {
        agency.dt = new Date();
    };
    
    function clear() {
    agency.dt = null;
    };

    function disabled(date, mode) {
    // return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    };

  function toggleMin() {
    agency.minDate = agency.minDate ? null : new Date();
  };
  agency.toggleMin();
  agency.maxDate = new Date(2020, 5, 22);

  function openCheckIn($event) {
    agency.status.openedCheckIn = true;
  };

  function openCheckOut($event) {
    agency.status.openedCheckOut = true;
  };  

  function setDate(year, month, day) {
    agency.dt = new Date(year, month, day);
  };

  agency.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  agency.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  agency.format = agency.formats[0];

  function showCheckIn(date) {
    console.log('check in: ', date)
  }

  function showCheckOut(date) {
    console.log('check out: ', date)
  }

  agency.status = {
    openedCheckIn: false,
    openedCheckOut: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 2);
  agency.events =
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

  function getDayClass(date, mode) {
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i=0;i<agency.events.length;i++){
        var currentDay = new Date(agency.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return agency.events[i].status;
        }
      }
    }

    return '';
  };




}
