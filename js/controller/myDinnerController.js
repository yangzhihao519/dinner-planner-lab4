//MyDinnerView Object constructor
var MyDinnerController = function (view, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
	view.plusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
	});
 
	view.minusButton.click(function(){
		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
	});

	$('#myMenu').on('click', '.removeDish', function (event) {
	    var id = $('.removeDish').attr("id");
		model.removeDishFromMenu(id);
	});
}