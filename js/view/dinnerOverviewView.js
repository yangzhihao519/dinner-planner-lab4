//SelectDishView Object constructor
var DinnerOverviewView = function (container, model) {
	model.attach(this);

	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
    this.dinnerOverviewViewNumberOfGuests = container.find("#dinnerOverviewViewNumberOfGuests");
	this.myDishes = container.find("#displayMyDishes");
	this.dinnerOverviewViewTotalPrice = container.find("#dinnerOverviewViewTotalPrice");

    this.dinnerOverviewViewNumberOfGuests.html(model.getNumberOfGuests);

	this.update = function(args){
		if (args == "numberOfGuests") {
			this.dinnerOverviewViewNumberOfGuests.html(model.getNumberOfGuests);
		}else if(args == "menu"){
			var myDishes = model.getFullMenu();
    
		    this.dinnerOverviewViewTotalPrice.html(model.getTotalMenuPrice());
			var myDishesHtml = "";

			for (i = 0; i < myDishes.length; i++) { 
				myDishesHtml += "<div class=\"col-md-4 col-sm-6 col-xs-12\">"+
						            "<div class=\"col-md-12 col-xs-8 thumb\">"+
							            "<a class=\"thumbnail\">"+
								        	"<img class=\"img-responsive center-block imageheight\" src='images/toast.jpg" + "'>"+
							            "</a>"+
						            "</div>"+
							        "<div class=\"col-md-12 col-xs-8 thumb\">"+
							        	"<span class=\"input-group-addon\">" + myDishes[i].Title + "</span>"+
							        "</div>"+
							        "<div class=\"col-md-12 col-xs-8 thumb\">"+
										        "<p class=\"parapadding\">"+model.getDishTotalPrice(myDishes[i])+" SEK</p>"+
									"</div>"+
								"</div>";
		    }
			
			this.myDishes.html(myDishesHtml);
		}else{
			// do nothing..
		}
	}
}
 
