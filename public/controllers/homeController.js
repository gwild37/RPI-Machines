app.controller('homeController', function ($scope, $http) {
  console.log("homeController activated!");

  const parameters = getParams();
  console.log(parameters);
  const location = parameters.loc;

});
