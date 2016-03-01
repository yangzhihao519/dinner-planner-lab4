//SelectDishView Object constructor
var SelectDishController = function (view, model) {
    setSelectedDishId(model);

	$("#typeSelector").change(function() {
		getAllDishes(model);
	    setSelectedDishId(model);
	});

	view.searchButton.click(function(){
		getAllDishes(model);
	    setSelectedDishId(model);
	});
}

function getAllDishes(model){
	var type =  $('#typeSelector :selected').val();
	var filter = $('#searchInput').val();
    model.getAllDishes(type, filter);
}

function setSelectedDishId(model){
	console.log("function setSelectedDishId(model)");
	$(".displayedDish").click(function(){
		var id = $(this).attr('id');
		console.log(".displayedDish.click");
		model.setSelectedDishId(id);
	});
}