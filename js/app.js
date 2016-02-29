$(function() {
	//We initialise our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var myDinnerView = new MyDinnerView($('#myDinnerView'), model);
	var myDinnerController = new MyDinnerController(myDinnerView, model);

	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var selectDishController = new SelectDishController(selectDishView, model);

	var oneDishView = new OneDishView($("#oneDishView"), model);
	var oneDishController = new OneDishController(oneDishView, model);

	var prepareDishView = new PrepareDishView($("#prepareDishView"),model);
	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);

	model.getAllDishes("appetizer");
});