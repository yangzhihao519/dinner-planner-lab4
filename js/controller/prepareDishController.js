//PrepareDishController Object constructor
var PrepareDishController = function (view, model) {

	$("#backToEditDinnerView6Button").click(function(){
		// view 2+4/5/6 -> view 2+3
		$('#oneDishView').hide();
		$('#dinnerOverviewView').hide();
		$('#prepareDishView').hide();
		$('#myDinnerView').show();
		$('#selectDishView').show();
	});
}