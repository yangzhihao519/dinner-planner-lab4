//DinnerOverviewController Object constructor
var DinnerOverviewController = function (view, model) {

	$("#backToEditDinnerView5Button").click(function(){
		// view 2+4/5/6 -> view 2+3
		$('#oneDishView').hide();
		$('#dinnerOverviewView').hide();
		$('#prepareDishView').hide();
		$('#myDinnerView').show();
		$('#selectDishView').show();
	});

	$("#printFullRecipeButton").click(function(){
		$('#dinnerOverviewView').hide();
		$('#prepareDishView').show();
	});

}