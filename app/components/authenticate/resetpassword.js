angular
    .module('app.resetpassword', [])
    .controller('ResetPasswordCtrl', ResetPasswordCtrl);

function ResetPasswordCtrl($uibModalInstance) {
    var reset = this;
    reset.ok = ok;
    reset.cancel = cancel;


    console.log('here')
  function ok() {
    $uibModalInstance.close();
    console.log('ok')
  };

  function cancel() {
    console.log('cancel')
    $uibModalInstance.dismiss('cancel');
  };    
}
