$body = $("body");
$(document).on({
    ajaxStart: function() { $body.addClass("loading");    },
     ajaxStop: function() { $body.removeClass("loading"); }    
});

$(function() {
	//We initialise our model
	var model = new DinnerModel();

	//And create the needed controllers and views
	var landingPageView = new LandingPageView($("#landingPage"), model);
	var landingPageController = new LandingPageController(landingPageView, model);

	var myDinnerView = new MyDinnerView($('#myDinnerView'), model);
	var myDinnerController = new MyDinnerController(myDinnerView, model);

	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var selectDishController = new SelectDishController(selectDishView, model);

	var oneDishView = new OneDishView($("#oneDishView"), model);
	var oneDishController = new OneDishController(oneDishView, model);

	var dinnerOverviewView = new DinnerOverviewView($('#dinnerOverviewView'), model);
	var dinnerOverviewController = new DinnerOverviewController(dinnerOverviewView, model);

	var prepareDishView = new PrepareDishView($("#prepareDishView"),model);
	var prepareDishController = new PrepareDishController(prepareDishView, model);
});