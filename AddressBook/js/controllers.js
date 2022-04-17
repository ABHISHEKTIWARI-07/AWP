angular
  .module("addressBookApp.controller", [])


  .controller(
    "detailsController",
    function ($scope, $rootScope, $routeParams, $location) {
      let personId = $routeParams.id;

      $scope.contact = $rootScope.contacts.find((person) => {
        return person.id == personId;
      });

      $scope.deleteContact = (personId) => {
        // API call for delete a contact
        // success function
        let index = $rootScope.contacts.findIndex((person) => {
          return person.id == personId;
        });
        $rootScope.contacts.splice(index, 1);
        $location.path("/");
      };
    }
  )


  .controller(
    "editController",
    function ($scope, $rootScope, $routeParams, $location) {
      let personId = $routeParams.id;

      $scope.contact = $rootScope.contacts.find((person) => {
        return person.id == personId;
      });

      // get backup of original data to reset in case of API failure or discard

      $scope.updateContact = function () {
        // API call for update contact
        // success function
        $location.path("/");
        // error function
        // reset object
      };

      $scope.discardUpdate = () => {
        // reset object
        $location.path("/");
      };
    }
  )


  .controller("addNewController", function ($scope, $rootScope, $location) {
    $scope.newContact = {};

    $scope.addNewContact = () => {
      // just temporary ID and image
      $scope.newContact.id =
        Math.max.apply(
          Math,
          $rootScope.contacts.map(function (contact) {
            return contact.id;
          })
        ) + 1;
      $scope.newContact.photo = "images/avatar.png";
      // API call for add new contact
      // success function
      $rootScope.contacts.push($scope.newContact);
      $location.path("/");
    };
  })

  
  .controller("listController", function ($scope, $rootScope) {
    $scope.deleteContact = (personId) => {
      // API call for delete a contact
      // success function
      let index = $rootScope.contacts.findIndex((person) => {
        return person.id == personId;
      });
      $rootScope.contacts.splice(index, 1);
    };

    $scope.orderByField = "title";
    $scope.reverseOrder = false;

    $scope.customOrderBy = (field) => {
      $scope.orderByField = field;
      $scope.reverseOrder = !$scope.reverseOrder;
    }

    $scope.searchType = "name";
    $scope.searchText = "";
  });
