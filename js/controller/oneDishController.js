//OneDishView Object constructor
var OneDishController = function (view, model) {
	view.confirmDishButton.click(function(){
		var selectedDishId = model.getSelectedDishId();
		console.log("selectedDishId: "+selectedDishId);

		model.addDishToMenu(selectedDishId);
	});
}