//SelectDishView Object constructor
var SelectDishView = function (container, model) {
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.allDishes = container.find("#allDishes");
	this.typeSelector = container.find("#typeSelector");
	this.searchInput = container.find("#searchInput");
	this.searchButton = container.find("#searchButton");

	var allDishes = model.getAllDishes("starter");
	var allDishesHtml = "";

	for (i = 0; i < allDishes.length; i++) { 
		console.log("dish.name: "+allDishes[i].name);
		allDishesHtml += "<div class=\"col-md-4 col-sm-12 col-xs-12 displayedDish\" id="+allDishes[i].id+">"+
				            "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
					            "<a class=\"thumbnail\" onclick=\"selectedDishDetails()\">"+
						        	"<img href=\"\" class=\"img-responsive center-block imageheight\" src='images/"+ allDishes[i].image + "'>"+
					            "</a>"+
				            "</div>"+
					        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
					        	"<span class=\"input-group-addon\">" + allDishes[i].name + "</span>"+
					        "</div>"+
					        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
								        "<p class=\"parapadding\">"+allDishes[i].description+"</p>"+
							"</div>"+
						"</div>";
    }

	$("#allDishes").html(allDishesHtml);

	this.update = function(args){
		var type =  $('#typeSelector :selected').val();
		var filter = "";
		if(args == "searchDish"){
			filter = $('#searchInput').val();
		}else if(args == "selectType"){
			// do nothing
		}else{
			// do nothing
		}

		var allDishes = model.getAllDishes(type, filter);

		var allDishesHtml = "";

		for (i = 0; i < allDishes.length; i++) { 
			console.log("dish.name: "+allDishes[i].name);
			allDishesHtml += "<div class=\"col-md-4 col-sm-12 col-xs-12 displayedDish\" id="+allDishes[i].id+">"+
					            "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
						            "<a class=\"thumbnail\" onclick=\"selectedDishDetails()\">"+
							        	"<img class=\"img-responsive center-block imageheight\" src='images/"+ allDishes[i].image + "'>"+
						            "</a>"+
					            "</div>"+
						        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
						        	"<span class=\"input-group-addon\">" + allDishes[i].name + "</span>"+
						        "</div>"+
						        "<div class=\"col-md-12 col-sm-12 col-xs-12 thumb\">"+
									        "<p class=\"parapadding\">"+allDishes[i].description+"</p>"+
								"</div>"+
							"</div>";
	    }
	    
	    $("#allDishes").html(allDishesHtml);
	}
}
