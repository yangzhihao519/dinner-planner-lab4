//MenuDishView Object constructor
var MyDinnerView = function(container, model){

	model.attach(this);

	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.myMenu = container.find("#myMenu");

	this.numberOfGuests.html(model.getNumberOfGuests);

	this.update = function(args){
		if (args == "numberOfGuests") {
			this.numberOfGuests.html(model.getNumberOfGuests);
		}else if(args == "menu"){
			var dishesInFullMenu = model.getFullMenu();
			var myMenuHtml = "";

			for(key in dishesInFullMenu){
		    	var dish = dishesInFullMenu[key];
		    	console.log("MyDinnerView dish: "+dish);

		    	myMenuHtml +=   "<tr>"+ 
			    					"<td>"+dish.name+"</td>"+
			    					"<td>"+model.getDishTotalPrice(dish.id)+" SEK</td>"+
									"<td><span class=\"glyphicon glyphicon-remove removeDish\" id="+dish.id+"></td>"+
		    					"</tr>";

		    }

		    myMenuHtml +=   "<tr>"+
								"<td><b>Total</b></td>"+
								"<td><b>"+model.getTotalMenuPrice()+" SEK</b></td>"+
							"</tr>";

			this.myMenu.html(myMenuHtml);
		}else{
			// do nothing..
		}
	}

}