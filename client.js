var app = angular.module('myApp', []);
app.controller('MainController', function(){
  var main = this;

  // labels start hidden
  main.showCurrentLabel = false;
  main.showPreviousLabel = false;
  main.currentMessage = '';
  main.messages = [];

  main.addMessage = function(){
    main.showCurrentLabel = true;
    if (main.currentMessage !== ''){
      main.messages.push(main.currentMessage);
    }


    if (main.messages.length > 0) {
      main.showPreviousLabel = true;
    }

    main.currentMessage = main.message;
    main.message = '';

  }
});
