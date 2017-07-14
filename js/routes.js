angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('home', {
    url: '/page1',
    templateUrl: 'templates/home.html',
    controller: 'homeCtrl'
  })

  .state('contacts', {
    url: '/page2',
    templateUrl: 'templates/contacts.html',
    controller: 'contactsCtrl'
  })

  .state('alarm', {
    url: '/page3',
    templateUrl: 'templates/alarm.html',
    controller: 'alarmCtrl'
  })

  .state('message', {
    url: '/page4',
    templateUrl: 'templates/message.html',
    controller: 'messageCtrl'
  })

  .state('location', {
    url: '/page5',
    templateUrl: 'templates/location.html',
    controller: 'locationCtrl'
  })

  .state('battery', {
    url: '/page7',
    templateUrl: 'templates/battery.html',
    controller: 'batteryCtrl'
  })

  .state('obstacle', {
    url: '/page11',
    templateUrl: 'templates/obstacle.html',
    controller: 'obstacleCtrl'
  })

  .state('batteryLife', {
    url: '/page12',
    templateUrl: 'templates/batteryLife.html',
    controller: 'batteryLifeCtrl'
  })

  .state('weatherUpdates', {
    url: '/Weather Forecast',
    templateUrl: 'templates/weatherUpdates.html',
    controller: 'weatherUpdatesCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});