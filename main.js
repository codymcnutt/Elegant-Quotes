angular.module('myApp', ["ngRating"])
angular.module('myApp').controller('newQuote', function ($scope) {
    $scope.quotes = []
    $scope.ratings	=[1, 2, 3, 4, 5]
    $scope.raven = false
    $scope.rating =0



    $scope.isEnter = function($event){
    	console.log($event.which)
    	if ($scope.author && $scope.text && $event.which === 13) {
    				$scope.quotes.push({author: $scope.author, text: $scope.text, rating: $scope.rating})
					
    		
    		if ($scope.author === "Edgar Allan Poe" || $scope.author ==="Poe" || $scope.author ==="Ravens" || $scope.author ==="edgar") {
    			$scope.raven = false
    			$scope.text = ""
    			$scope.author = ""
    		} 
    		else{
    			$scope.raven = true
    			$scope.text = ""
    			$scope.author = ""
    		}
		} 

}
    // 	console.log($scope.quotes)
  
    // $scope.sort =   	
  })












