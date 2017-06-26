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
  .controller("DataIndexCtrl", [
    "$state",
    "DataFactory",
    DataIndexControllerFunction
  ])

  function RouterFunction($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "js/ng-views/home.html"
      })
      .state("dataIndex", {
        url: "/data",
        templateUrl: "js/ng-views/data/index.html",
        controller: "DataIndexCtrl",
        controllerAs: "vm"
      })
      $urlRouterProvider.otherwise("data")
  }

  function DataFactoryFunction($resource) {
    return $resource("api.census.gov/data/2013/language?get=EST,LANLABEL,NAME&for=state:06&LAN=625", {}, {
    })
  }

  function DataIndexControllerFunction($state, DataFactory) {
    this.data = DataFactory.query();
  }
