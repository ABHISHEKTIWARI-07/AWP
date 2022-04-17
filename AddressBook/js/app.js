const addressBookApp = angular.module("addressBookApp", [
  "addressBookApp.controller",
  "addressBookApp.filters",
  "ngRoute",
]);


addressBookApp.config(($routeProvider, $locationProvider) => {
  $routeProvider
    .when("/", { templateUrl: "views/home.html" })

    
    .when("/contact-list", {
      templateUrl: "views/contact-list.html",
      controller: "listController",
    })


    .when("/contact-detail/:id", {
      templateUrl: "views/contact-detail.html",
      controller: "detailsController",
    })


    .when("/add-contact", {
      templateUrl: "views/add-contact.html",
      controller: "addNewController",
    })


    .when("/edit-contact/:id", {
      templateUrl: "views/edit-contact.html",
      controller: "editController",
    })


    .otherwise({ template: "<h1>404. Page not found...</h1>" });

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
});

addressBookApp.run(($rootScope, $http, $location) => {
  $http.get("persons.json").then((response) => {
    $rootScope.contacts = response.data;
  });


  $rootScope.$on("$locationChangeSuccess", function () {
    console.log($location.path());
    $rootScope.myLocation = $location.path();
  });
});
