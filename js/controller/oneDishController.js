//OneDishView Object constructor
var OneDishController = function (view, model) {
	view.confirmDishButton.click(function(){
		var selectedDishId = model.getSelectedDishId();
		console.log("selectedDishId: "+selectedDishId);

		model.addDishToMenu(selectedDishId);
		model.setSelectedDishId("");

		// view 2+4/5/6 -> view 2+3
		$('#oneDishView').hide();
		$('#dinnerOverviewView').hide();
		$('#prepareDishView').hide();
		$('#myDinnerView').show();
		$('#selectDishView').show();	
	});

	$("#backToSelectDishButton").on("click", function(){
		model.setSelectedDishId("");

		// view 2+4/5/6 -> view 2+3
		$('#oneDishView').hide();
		$('#dinnerOverviewView').hide();
		$('#prepareDishView').hide();
		$('#myDinnerView').show();
		$('#selectDishView').show();	
	});
}