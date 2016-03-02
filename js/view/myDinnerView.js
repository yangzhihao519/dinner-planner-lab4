//MenuDishView Object constructor
var MyDinnerView = function(container, model){

	model.attach(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.myMenu = container.find("#myMenu");

	this.numberOfGuests.html(model.getNumberOfGuests);

	this.update = function(args){
		if (args === "numberOfGuests" || args === "menu" || args === "selectedDishId" || args["type"] === "setOneDish") {
			this.numberOfGuests.html(model.getNumberOfGuests);
			var dishesInFullMenu = model.getFullMenu();
			console.log("dishesInFullMenu: "+dishesInFullMenu);
			var myMenuHtml = "";

			for(key in dishesInFullMenu){
		    	var dish = dishesInFullMenu[key];
		    	console.log("MyDinnerView dish: "+dish);

		    	myMenuHtml +=   "<tr>"+ 
			    					"<td>"+dish.Title+"</td>"+
			    					"<td>"+model.getDishTotalPrice(dish)+" SEK</td>"+
									"<td><span class=\"glyphicon glyphicon-remove removeDish\" id="+dish.RecipeID+"></td>"+
		    					"</tr>";
		    }

		    var pendingPrice = 0.0;
		    var totalPrice = model.getTotalMenuPrice();

		    if(args["type"] === "setOneDish"){
		    	var pendingDish = args["content"];
		    	if(pendingDish){
					pendingPrice = model.getDishTotalPrice(pendingDish);
			    	totalPrice += pendingPrice;
		    	}else{
				   // do nothing
				}
		    }else{
				// do nothing
		    }

 			myMenuHtml +=   "<tr>"+
								"<td><b>Pending</b></td>"+
								"<td><b>"+ pendingPrice +" SEK</b></td>"+
							"</tr>"+
							"<tr>"+
								"<td><b>Total</b></td>"+
								"<td><b>" + totalPrice +" SEK</b></td>"+
						    "</tr>";

			this.myMenu.html(myMenuHtml);

		}else{
			// do nothing..
		}
	}

}