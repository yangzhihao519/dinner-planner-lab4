//LandingPageController Object constructor
var LandingPageController = function (view, model) {
	
	view.createDinnerButton.click(function(){
		$('#landing').hide();
		$('#myDinnerView').show();
		$('#selectDishView').show();

		model.getAllDishes("appetizer");
	});
}