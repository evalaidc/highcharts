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
  .controller("DataIndexCtrl", [
    "$state",
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

  // function DataFactoryFunction($resource) {
  //   return $resource("", {}, {
  //   })
  // }

  function DataIndexControllerFunction($state) {
  }
