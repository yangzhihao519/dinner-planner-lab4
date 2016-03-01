//PrepareDishView Object constructor
var PrepareDishView = function (container, model) {
	
	model.attach(this);

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.prepareDishes = container.find("#prepareDish");
	this.numberOfPeople = container.find("#numberOfPeople");
	
	this.numberOfPeople.html(model.getNumberOfGuests);

	this.update = function(args){
		if (args == "numberOfGuests") {
			this.numberOfPeople.html(model.getNumberOfGuests);
		}else if(args == "menu"){
			var dishes = model.getFullMenu();
			var prepareDishHtml = "";
			
			for(i=0; i< dishes.length; i++)
			{
				var dish = dishes[i];
				var description = "(No description available)";
				var instructions = "(No instructions available)";

				if(dish.Description){
					description = dish.Description;
				}else{
					// do nothing
				}

				if(dish.Instructions){
					instructions = dish.Instructions;
				}else{
					// do nothing
				}

				prepareDishHtml += "<div class=\"panel panel-default\">"+
										"<div class=\"panel-body\">"+
											"<div class=\"col-md-12\">"+
												"<div class=\"col-md-3 thumb\">"+
													"<a class=\"thumbnail\">"+
														"<img class=\"img-responsive center-block imageheight\" src='" + dish.ImageURL +"'>"+
													"</a>"+
												"</div>"+
												"<div class=\"col-md-3\">"+
													"<h3>"+dish.Title+"</h3>"+
													"<div class=\"col-md-12\">"+
														"<span>"+description+ "</span>"+
													"</div>"+
												"</div>"+
												"<div class=\"col-md-6\">"+
													"<h3>Instructions</h3>"+
													"<span>"+instructions+ "</span>"+
												"</div>"+
											"</div>"+
										"</div>"+
									"</div>";
				
			}
			this.prepareDishes.html(prepareDishHtml);
		}else{
			// do nothing..
		}
	}
}