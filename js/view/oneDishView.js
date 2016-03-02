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
		if (args === "numberOfGuests" || args === "selectedDishId") {
			this.oneDishNumberOfGuests.html(model.getNumberOfGuests);

			var oneDishId = model.getSelectedDishId();
			
			if(!oneDishId || 0 === oneDishId.length){
				// no selected dish
			}else{
				model.getDish(oneDishId);
			}

		}else if(args["type"] === "setOneDish"){
			console.log("oneDishId: "+oneDishId);
			var oneDish = args["content"];
			
			if(oneDish){
				console.log("oneDish: "+oneDish);

				this.oneDishName.html(oneDish.Title);
				this.oneDishImage.html("<a class=\"thumbnail\">"+"<img class=\"img-responsive center-block imageheight\" src='"+oneDish.ImageURL+"'></a>");
				this.oneDishDescription.html(oneDish.Description);
				
				this.oneDishTotalPrice.html(model.getDishTotalPrice(oneDish));

			    var oneDishAllIngredientsHtml = "";

			    var oneDishAllIngredientsArray = oneDish.Ingredients;
			    console.log("oneDishAllIngredientsArray: "+oneDishAllIngredientsArray);

				for (key in oneDishAllIngredientsArray) {
					oneDishAllIngredientsHtml +="<div class=\"col-md-12 col-sm-12 col-xs-12\">"+
													"<div class=\"col-md-1 col-sm-1 col-xs-1\">"+
														oneDishAllIngredientsArray[key].DisplayQuantity+
													"</div>"+
													"<div class=\"col-md-2 col-sm-2 col-xs-2\">"+
														oneDishAllIngredientsArray[key].Unit+
													"</div>"+
													"<div class=\"col-md-6 col-sm-6 col-xs-5\">"+
													    oneDishAllIngredientsArray[key].Name+
													"</div>"+
													"<div class=\"col-md-1 col-sm-1 col-xs-1\">"+
														"SEK"+
												    "</div>"+
												    "<div class=\"col-md-1 col-sm-1 col-xs-1\">1"+
												    "</div>"+
													"<br/>"+"<br/>"+
												"</div>";
			    }
				
				this.oneDishAllIngredients.html(oneDishAllIngredientsHtml);
			}else{
				// do nothing
			}
		}
	}
}