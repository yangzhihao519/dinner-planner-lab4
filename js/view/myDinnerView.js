//MenuDishView Object constructor
var MyDinnerView = function(container, model){

	model.attach(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.myMenu = container.find("#myMenu");

	this.numberOfGuests.html(model.getNumberOfGuests);

	this.update = function(args){
		if (args == "numberOfGuests" || args == "menu" || args == "selectedDishId") {
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

		    var selectedDishId = model.getSelectedDishId();
		    if(!selectedDishId || 0 === selectedDishId.length){
		    	// no dish selected
		        myMenuHtml +=   "<tr>"+
									"<td><b>Pending</b></td>"+
									"<td><b>0.0 SEK</b></td>"+
								"</tr>"+
								"<tr>"+
									"<td><b>Total</b></td>"+
									"<td><b>"+model.getTotalMenuPrice()+" SEK</b></td>"+
							    "</tr>";
		    }
		    else{
		    	var pendingPrice = model.getDishTotalPrice(selectedDishId);
		    	var pendingTotalPrice = pendingPrice + model.getTotalMenuPrice();

		        myMenuHtml +=   "<tr>"+
									"<td><b>Pending</b></td>"+
									"<td><b>"+ pendingPrice +" SEK</b></td>"+
								"</tr>"+
								"<tr>"+
									"<td><b>Total</b></td>"+
									"<td><b>" + model.getTotalMenuPrice() +" SEK</b></td>"+
							    "</tr>";
		    }

			this.myMenu.html(myMenuHtml);

		}else{
			// do nothing..
		}
	}

}