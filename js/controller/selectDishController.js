//SelectDishView Object constructor
var SelectDishController = function (view, model) {
    setSelectedDishId(model);

	$("#typeSelector").change(function() {
	    view.update("selectType");
	    setSelectedDishId(model);
	});

	view.searchButton.click(function(){
	    view.update("searchDish");
	    setSelectedDishId(model);
	});
}

function setSelectedDishId(model){
	$(".displayedDish").click(function(){
			var id = $(this).attr('id');
			model.setSelectedDishId(id);
	});
}