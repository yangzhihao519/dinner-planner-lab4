//DinnerModel Object constructor
var DinnerModel = function() {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var numberOfGuests = 1;
	var menu = [];
	var dishes = [];
	var selectedDishId = "";

	this._observers = [];

	this.attach = function(observer){
		console.log("DinnerModel: this.attach");
		this._observers.push(observer);
	}


	this.notify = function(args){
		console.log("DinnerModel: this.notify");
		for(key in this._observers){
			this._observers[key].update(args);
		}
	}

	this.setNumberOfGuests = function(num) {
		//TODO Lab 2
		console.log("set~ "+ num);
		if(num<0){
			numberOfGuests = 0;
		}
		else{
			numberOfGuests = num;
		}

		this.notify("numberOfGuests");
	}

		
	// should return 
	this.getNumberOfGuests = function() {
		//TODO Lab 2
		return numberOfGuests;
	}

    
    this.setSelectedDishId = function(id){
    	selectedDishId = id;

    	this.notify("selectedDishId");
    }

    this.getSelectedDishId = function(){
    	return selectedDishId;
    }

	// //Returns the dish that is on my menu for selected type 
	// this.getSelectedDish = function(type) {
	// 	var selectedDishes = [];

	// 	for (key in menu){
	// 		var dish = this.getDish(menu[key]);

	// 		if (dish.type == type) {
	// 			selectedDishes.push(dish);
	// 		}else{
	// 			// do nothing
	// 		}
	// 	}
	// 	//TODO Lab 2
	// 	return selectedDishes;
	// }

	//Returns all the dishes on the my menu.
	this.getFullMenu = function() {
		//TODO Lab 2
		var allDishes = [];

		for(key in menu){
			allDishes.push(this.getDish(menu[key]));
		}
		return allDishes;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 2
		var allIngredients = [];

		for(key in menu){
			var dish = this.getDish(menu[key]);
			var ingredients = dish.ingredients;

			for(ingredient in ingredients){
				allIngredients.push(ingredient);
			}
		}
		return allIngredients;
	}

	//Returns the total price of my menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
		var totalMenuPrice = 0;

		for(key in menu){
			var dishId = menu[key];
			var thisDishPrice = this.getDishTotalPrice(dishId);
			totalMenuPrice += thisDishPrice;
		}

		console.log("totalMenuPrice: "+ totalMenuPrice);
		return totalMenuPrice;	
	}

	//Adds the passed dish to my menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2 
		menu.push(id);

		this.notify("menu");
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 2
		for (key in menu){
			var dishId = menu[key];

			if(dishId == id){
				menu.splice(key, 1);
				break;
			}
			else{
				// do nothing
			}
		}
		this.notify("menu");
	}

	//function that returns all dishes of specific type (i.e. "appetizer", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type, filter) {
		var recipeID = 196149;

	    var apiKey = "8vtk7KykflO5IzB96kb0mpot0sU40096";
		var anyKeyWord = type;
		var titleKeyWord = filter
		var url = "http://api.bigoven.com/recipes"+ "?api_key=" + apiKey + 
													"&any_kw=" + anyKeyWord +
													"&title_kw=" + titleKeyWord +
													"&pg=1&rpp=20"
		console.log("url: "+url);
		$.ajax({
		        type: "GET",
		        dataType: 'json',
		        cache: false,
		        url: url,
		        context: this,
		        success: function (data) {
		            dishes = data["Results"];
		            console.log(dishes);

		            var args = {type:"selectDish", content:dishes};
 					console.log(args);
		            this.notify(args);
		        }
		});

		// return $(dishes).filter(function(index,dish) {
		// 	var found = true;
		// 	if(filter){
		// 		found = false;
		// 		$.each(dish.ingredients,function(index,ingredient) {
		// 			if(ingredient.name.indexOf(filter)!=-1) {
		// 				found = true;
		// 			}
		// 		});
		// 		if(dish.name.indexOf(filter) != -1)
		// 		{
		// 			found = true;
		// 		}
		// 	}
		//   	return dish.type == type && found;
		// });	
	}

	//function that returns a dish of specific ID
	this.getDish = function (id) {
	  for(key in dishes){
			if(dishes[key].RecipeID == id) {
				return dishes[key];
			}
		}
	}

	//function that returns total price of one dish of specific ID
	this.getDishTotalPrice = function (id) {
		var dish = this.getDish(id);
		var allIngredients = dish.ingredients;
		var dishTotalPrice = 0;

		for(key in allIngredients){
			dishTotalPrice += allIngredients[key].price;
		}

		return dishTotalPrice;
	}

	// the dishes variable contains an array of all the 
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name, 
	// quantity (a number), price (a number) and unit (string 
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	// var dishes = [{
	// 	'id':1,
	// 	'name':'French toast',
	// 	'type':'appetizer',
	// 	'image':'toast.jpg',
	// 	'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
	// 	'ingredients':[{ 
	// 		'name':'eggs',
	// 		'quantity':5,
	// 		'unit':'',
	// 		'price':10
	// 		},{
	// 		'name':'milk',
	// 		'quantity':30,
	// 		'unit':'ml',
	// 		'price':6
	// 		},{
	// 		'name':'brown sugar',
	// 		'quantity':7,
	// 		'unit':'g',
	// 		'price':1
	// 		},{
	// 		'name':'ground nutmeg',
	// 		'quantity':0.5,
	// 		'unit':'g',
	// 		'price':12
	// 		},{
	// 		'name':'white bread',
	// 		'quantity':2,
	// 		'unit':'slices',
	// 		'price':2
	// 		}]
	// 	},{
	// 	'id':2,
	// 	'name':'Sourdough appetizer',
	// 	'type':'appetizer',
	// 	'image':'sourdough.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'active dry yeast',
	// 		'quantity':0.5,
	// 		'unit':'g',
	// 		'price':4
	// 		},{
	// 		'name':'warm water',
	// 		'quantity':30,
	// 		'unit':'ml',
	// 		'price':0
	// 		},{
	// 		'name':'all-purpose flour',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':2
	// 		}]
	// 	},{
	// 	'id':3,
	// 	'name':'Baked Brie with Peaches',
	// 	'type':'appetizer',
	// 	'image':'bakedbrie.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'round Brie cheese',
	// 		'quantity':10,
	// 		'unit':'g',
	// 		'price':8
	// 		},{
	// 		'name':'raspberry preserves',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':10
	// 		},{
	// 		'name':'peaches',
	// 		'quantity':1,
	// 		'unit':'',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':100,
	// 	'name':'Meat balls',
	// 	'type':'main dish',
	// 	'image':'meatballs.jpg',
	// 	'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
	// 	'ingredients':[{ 
	// 		'name':'extra lean ground beef',
	// 		'quantity':115,
	// 		'unit':'g',
	// 		'price':20
	// 		},{
	// 		'name':'sea salt',
	// 		'quantity':0.7,
	// 		'unit':'g',
	// 		'price':3
	// 		},{
	// 		'name':'small onion, diced',
	// 		'quantity':0.25,
	// 		'unit':'g',
	// 		'price':2
	// 		},{
	// 		'name':'garlic salt',
	// 		'quantity':0.7,
	// 		'unit':'g',
	// 		'price':2
	// 		},{
	// 		'name':'Italian seasoning',
	// 		'quantity':0.6,
	// 		'unit':'g',
	// 		'price':3
	// 		},{
	// 		'name':'dried oregano',
	// 		'quantity':0.3,
	// 		'unit':'g',
	// 		'price':3
	// 		},{
	// 		'name':'crushed red pepper flakes',
	// 		'quantity':0.6,
	// 		'unit':'g',
	// 		'price':3
	// 		},{
	// 		'name':'Worcestershire sauce',
	// 		'quantity':6,
	// 		'unit':'ml',
	// 		'price':7
	// 		},{
	// 		'name':'milk',
	// 		'quantity':20,
	// 		'unit':'ml',
	// 		'price':4
	// 		},{
	// 		'name':'grated Parmesan cheese',
	// 		'quantity':5,
	// 		'unit':'g',
	// 		'price':8
	// 		},{
	// 		'name':'seasoned bread crumbs',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':101,
	// 	'name':'MD 2',
	// 	'type':'main dish',
	// 	'image':'bakedbrie.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ingredient 1',
	// 		'quantity':1,
	// 		'unit':'pieces',
	// 		'price':8
	// 		},{
	// 		'name':'ingredient 2',
	// 		'quantity':15,
	// 		'unit':'g',
	// 		'price':7
	// 		},{
	// 		'name':'ingredient 3',
	// 		'quantity':10,
	// 		'unit':'ml',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':102,
	// 	'name':'MD 3',
	// 	'type':'main dish',
	// 	'image':'meatballs.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ingredient 1',
	// 		'quantity':2,
	// 		'unit':'pieces',
	// 		'price':8
	// 		},{
	// 		'name':'ingredient 2',
	// 		'quantity':10,
	// 		'unit':'g',
	// 		'price':7
	// 		},{
	// 		'name':'ingredient 3',
	// 		'quantity':5,
	// 		'unit':'ml',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':103,
	// 	'name':'MD 4',
	// 	'type':'main dish',
	// 	'image':'meatballs.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ingredient 1',
	// 		'quantity':1,
	// 		'unit':'pieces',
	// 		'price':4
	// 		},{
	// 		'name':'ingredient 2',
	// 		'quantity':12,
	// 		'unit':'g',
	// 		'price':7
	// 		},{
	// 		'name':'ingredient 3',
	// 		'quantity':6,
	// 		'unit':'ml',
	// 		'price':4
	// 		}]
	// 	},{
	// 	'id':200,
	// 	'name':'Chocolat Ice cream',
	// 	'type':'dessert',
	// 	'image':'icecream.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ice cream',
	// 		'quantity':100,
	// 		'unit':'ml',
	// 		'price':6
	// 		}]
	// 	},{
	// 	'id':201,
	// 	'name':'Vanilla Ice cream',
	// 	'type':'dessert',
	// 	'image':'icecream.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ice cream',
	// 		'quantity':100,
	// 		'unit':'ml',
	// 		'price':6
	// 		}]
	// 	},{
	// 	'id':202,
	// 	'name':'Strawberry',
	// 	'type':'dessert',
	// 	'image':'icecream.jpg',
	// 	'description':"Here is how you make it... Lore ipsum...",
	// 	'ingredients':[{ 
	// 		'name':'ice cream',
	// 		'quantity':100,
	// 		'unit':'ml',
	// 		'price':6
	// 		}]
	// 	}
	// ];

}