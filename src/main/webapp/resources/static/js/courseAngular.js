var genApp=angular.module("courseApp", []);
genApp.controller("courseCtr", function($scope, $http) {
	
	$scope.getGeneration = function() {
		$http.get("http://localhost:8081/api/generation").then(function(response) {
			$scope.generations = response.data.DATA;
			$scope.genToInsert=$scope.generations[$scope.generations.length-1].GENNAME;
		});
	}
	
	$scope.addCourse = function() {
		var couData={'COUNAME':$scope.modCouName, 'COUSTARTDATE':$scope.modCouStartDate, 'COUENDDATE':$scope.modCouEndDate, 'GENID':$scope.genToInsert, 'COUCOLOR':$scope.modCouColor};
		$http.post("http://localhost:8081/api/course", couData).success(function(response) {
			$.Notification.notify('success','bottom left','GENERATION', 'New course was insert sucessfully!');
			$scope.modCouName=null;
			$scope.modCouStartDate=null;
			$scope.modCouEndDate=null;
			$scope.modCouColor=null;
		});
	}
	
	$scope.getGeneration();
	$("li:last", "ul#listGenerations").addClass("active");
	$scope.showAddCourseForm = function() {
		$("#addCourse-layout").slideToggle();
		if($("#btnShowAddCourseView").val()=='plus') {
			$("#btnShowAddCourseView").val('minus');
			$("#btnShowAddCourseView").html('<i id="plusicon" class="glyphicon glyphicon-minus-sign"></i>');
		}else{
			$("#btnShowAddCourseView").val('plus');
			$("#btnShowAddCourseView").html('<i id="plusicon" class="glyphicon glyphicon-plus-sign"></i>');
		}
	}
	
});