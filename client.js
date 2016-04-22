var app = angular.module('myApp', []);
app.controller('MainController', function(){

  // declare 'this' for controller
  var main = this;

  // labels start hidden
  main.showCurrentLabel = false;
  main.showPreviousLabel = false;
  
  main.currentMessage = '';
  main.messages = [];
  main.message = '';

  main.addMessage = function(){
    // tests to see if anything has been entered before doing anything else
    if (main.message !== '') {

      // show 'Current Message:' label on first click
      main.showCurrentLabel = true;

      // add to previous messages only if we have a current message to add
      if (main.currentMessage !== ''){
        main.messages.push(main.currentMessage);
      }

      // show 'Previous Messages:' label if we have any to show
      if (main.messages.length > 0) {
        main.showPreviousLabel = true;
      }

      main.currentMessage = main.message;
      main.message = '';
    }
  }
});
