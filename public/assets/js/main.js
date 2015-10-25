$(window).ready(function(){
	var price = 0;

	$(".servd-table-bg").click(function(){ //open and collapse tables
		if(!$(this).hasClass("clicked")){
			$("#" + $(this).attr("id")).siblings(".dropdown").css("display","initial");
			$("#" + $(this).attr("id")).addClass("clicked");
		}
		else{
			$("#" + $(this).attr("id")).siblings(".dropdown").css("display","none");
			$("#" + $(this).attr("id")).removeClass("clicked");
		}
	});

	$("#set-price").click(function(){ //submit entered price to local variable price
		price = $(".form-control").val();
		$(".form-control").val("");
	});

	$("#clear-button").click(function(){ //uncleared transactions clear animation
		$(".uncleared-transactions").stop().animate({"opacity": 0}, 300);
		$("#table-1 img").attr("src", "/assets/img/empty-table.png");
		$("#table-1 img").css({"width": "140px","vertical-align": "middle"});
		$("#table-1 h3").text("0 guests");
	});

	$("#seat-button").click(function(){ //seat the unseated clear animation
		$(".uncleared-waitlist").stop().animate({"opacity": 0}, 300);
	});
});