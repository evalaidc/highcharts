angular
  .module("Highcharts", [
    "ui.router",
    "ngResource"
  ])
  .config([
    "$stateProvider",
    "$urlRouterProvider",
    RouterFunction
  ])
  .factory("DataFactory", [
    "$resource",
    DataFactoryFunction
  ])
  .controller("dataIndexCtrl", [
    "$state",
    "DataFactory",
    dataIndexControllerFunction
  ])

  function RouterFunction($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("Home", {
        url: "/",
        templateUrl: "js/ng-views/home.html"
      })
  }
