//OneDishView Object constructor
var OneDishController = function (view, model) {
	view.confirmDishButton.click(function(){
		model.addDishToMenu(model.getSelectedDishId());

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