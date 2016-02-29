//OneDishView Object constructor
var OneDishView = function (container, model) {

	model.attach(this);

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.oneDishName = container.find("#oneDishName");
	this.oneDishImage = container.find("#oneDishImage");
	this.oneDishDescription = container.find("#oneDishDescription");
	this.oneDishNumberOfGuests = container.find("#oneDishNumberOfGuests");
	this.oneDishAllIngredients = container.find("#oneDishAllIngredients");
	this.oneDishTotalPrice = container.find("#oneDishTotalPrice");
	this.confirmDishButton = container.find("#confirmDishButton");

	this.oneDishNumberOfGuests.html(model.getNumberOfGuests);

	this.update = function(args){
		if (args == "numberOfGuests") {
			this.oneDishNumberOfGuests.html(model.getNumberOfGuests);
		}else if(args == "selectedDishId"){
			var oneDishId = model.getSelectedDishId();
			console.log("oneDishId: "+oneDishId);
			var oneDish = model.getDish(oneDishId);
			console.log("oneDish: "+oneDish);

			this.oneDishName.html(oneDish.name);
			this.oneDishImage.html("<a class=\"thumbnail\">"+"<img class=\"img-responsive center-block imageheight\" src=\"images/"+oneDish.image+"\">"+"</a>");
			this.oneDishDescription.html(oneDish.description);
			
			this.oneDishTotalPrice.html(model.getDishTotalPrice(oneDishId));

		    var oneDishAllIngredientsHtml = "";
		    var oneDishAllIngredientsArray = oneDish.ingredients;

			for (key in oneDishAllIngredientsArray) {
				oneDishAllIngredientsHtml +="<div class=\"col-md-12 col-sm-12 col-xs-12\">"+
												"<div class=\"col-md-1 col-sm-1 col-xs-1\">"+
													oneDishAllIngredientsArray[key].quantity+
												"</div>"+
												"<div class=\"col-md-2 col-sm-2 col-xs-2\">"+
													oneDishAllIngredientsArray[key].unit+
												"</div>"+
												"<div class=\"col-md-6 col-sm-6 col-xs-5\">"+
												    oneDishAllIngredientsArray[key].name+
												"</div>"+
												"<div class=\"col-md-1 col-sm-1 col-xs-1\">"+
													"SEK"+
											    "</div>"+
											    "<div class=\"col-md-1 col-sm-1 col-xs-1\">"+
											       oneDishAllIngredientsArray[key].price+
											    "</div>"+
												"<br/>"+"<br/>"+
											"</div>";
		    }
			
			this.oneDishAllIngredients.html(oneDishAllIngredientsHtml);
		}else{
			//do nothing
		}

	}
}