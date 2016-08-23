myApp.controller('mainCtrl2', ['$scope', function($scope){
    $scope.onClick = function(item) {
        $scope.$apply(function() {
            if (!$scope.showDetailPanel)
                $scope.showDetailPanel = true;
            $scope.detailItem = item;
        });
    };
    $scope.greeting = "Resize the page to see the re-rendering";
    $scope.data = [
      {name: "Greg", score: 98},
      {name: "Ari", score: 96},
      {name: 'Q', score: 75},
      {name: "Loser", score: 48}
    ];

}]);
