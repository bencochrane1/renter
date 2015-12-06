angular
    .module('app.agencydashboard', [])
    .controller('AgencyDashboardCtrl', AgencyDashboardCtrl);

function AgencyDashboardCtrl($scope, $location, AnchorSmoothScroll) {
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
    agency.submitEnabled = false;
    agency.gotoElement = gotoElement;

    agency.termSheetTicked = true;
    agency.licenseTicked = true;
    agency.idTicked = true;
    agency.hideFirstTime = false;

    agency.submitEnabledCheck = submitEnabledCheck;

    function submitEnabledCheck() {
      if (agency.termSheetTicked && agency.licenseTicked && agency.idTicked) {
        agency.submitEnabled = true;
        console.log('submit enabled: ', agency.submitEnabled);
      }
    }

    if (document.getElementById("uploadBtnTermsheet") === null) { 
      return 
    } else {
      document.getElementById("uploadBtnTermsheet").onchange = function () {
          var element = document.getElementById("uploadTermsheetTick");
          element.className = 'ion-ios-checkmark';
          agency.termSheetTicked = true;
          agency.submitEnabledCheck();
      };
    }

    if (document.getElementById("uploadBtnLicense") === null) { 
      return 
    } else {
      document.getElementById("uploadBtnLicense").onchange = function () {
        if (document.getElementById("uploadBtnLicense") === null) { return };
          var element = document.getElementById("uploadLicenseTick");
          element.className = 'ion-ios-checkmark';
          agency.licenseTicked = true;
      }; 
    }   

    if (document.getElementById("uploadBtnId") === null) { 
      return 
    } else {    
      document.getElementById("uploadBtnId").onchange = function () {
        if (document.getElementById("uploadBtnId") === null) { return };
          var element = document.getElementById("uploadIdTick");
          element.className = 'ion-ios-checkmark';
          agency.idTicked = true;
      };
    }

    function gotoElement(eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
      $location.hash('top');
 
      // call $anchorScroll()
      AnchorSmoothScroll.scrollTo(eID);
    };

    function toggleLogin(eID) {

      if (agency.loginError) {
        agency.loginError = false;
        agency.loggingIn = false;
        return;
      }
      agency.loggingIn = !agency.loggingIn;
      agency.loginError = !agency.loginError;
      agency.gotoElement(eID);
    }

    function toggleTick() {
        agency.ticked = !agency.ticked;
        agency.submitEnabled = !agency.submitEnabled;
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
