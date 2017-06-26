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
      .state("dataIndex", {
        url: "/data",
        templateUrl: "js/ng-views/data/index.html",
        controller: "dataIndexCtrl",
        controllerAs: "vm"
      })
      $urlRouterProvider.otherwise("data")
  }
