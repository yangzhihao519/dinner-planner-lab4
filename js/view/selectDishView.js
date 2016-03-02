//SelectDishView Object constructor
var SelectDishView = function (container, model) {
	model.attach(this);

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.allDishes = container.find("#allDishes");
	this.typeSelector = container.find("#typeSelector");
	this.searchInput = container.find("#searchInput");
	this.searchButton = container.find("#searchButton");

	this.update = function(args){
		if (args["type"] === "selectDish") {
			var allDishesHtml = "";
			var allDishes = args["content"];

			if(allDishes){
				for (key in allDishes) { 
				console.log("dish: "+allDishes[key]);

				allDishesHtml += "<div class=\"col-md-4 col-sm-12 col-xs-12 displayedDish\" id="+allDishes[key].RecipeID+">"+
								            "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
									            "<a class=\"thumbnail\" style=\"margin-bottom: 5px\">"+
										        	"<img href=\"\" class=\"img-responsive center-block imageheight\" src='"+ allDishes[key].ImageURL +"'>"+
									            "</a>"+
								            "</div>"+
									        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb parapadding\">"+
									        	"<h5><span>" + allDishes[key].Title + "</span></h5>"+
									        "</div>"+
									        /*"<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
												        "<p class=\"parapadding\">"+ allDishes[key].Category+"</p>"+
											"</div>"+*/
										"</div>";
		    	}
			}else{
				var errorMessage = args["errorMsg"];

				if (errorMessage) {
					allDishesHtml = errorMessage;
				}else{
					allDishesHtml += "Sorry, there is some problem receiveing data.";
				}
			}
			
		    $("#allDishes").html(allDishesHtml);
		}
		else{
			// do nothing
		}
	}
}
