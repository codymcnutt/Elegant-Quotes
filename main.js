angular.module('myApp',[])
angular.module('myApp').controller('newQuote', function ($scope) {
    $scope.quotes = []
    $scope.ratings	=[1, 2, 3, 4, 5]
    $scope.raven = false


   $scope.showRaven = function(){
        $scope.Raven = true
    }
    $scope.dismissRaven = function(){
        $scope.raven = false
    }



    $scope.isEnter = function($event){
    	console.log($event.which)
    	if ($scope.author && $scope.text && $event.which === 13) {
    		$scope.quotes.push({author: $scope.author, text: $scope.text})
    		$scope.text = ""
    		$scope.author = ""
    		$scope.raven = !$scope.raven
    	if ($scope.author === "Edgar Allen Poe" || $scope.author ==="Poe" || $scope.author ==="Ravens" || $scope.author ==="edgar") {
return $scope.raven = true
	}
}

}
    	console.log($scope.quotes)
    	
  })












