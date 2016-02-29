//OneDishView Object constructor
var OneDishController = function (view, model) {
	view.confirmDishButton.click(function(){
		var selectedDishId = model.getSelectedDishId();
		console.log("selectedDishId: "+selectedDishId);

		model.addDishToMenu(selectedDishId);

		$('.removeDish').on('click', (function(){
			console.log("click remove");
			var id = $(this).attr("id");
			model.removeDishFromMenu(id);

			$('.removeDish').on('click', (function(){
				console.log("click remove");
				var id = $(this).attr("id");
				model.removeDishFromMenu(id);
			}));
		}));
	});
}