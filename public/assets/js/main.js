$(window).ready(function(){
	var price = 0;
	var socket = io.connect();

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
		$("#tohide").fadeOut(300);

		socket.emit('chargeEvent', {'price': price});
	});

	$("#clear-button").click(function(){ //uncleared transactions clear animation
		$(".uncleared-transactions").stop().animate({"opacity": 0}, 300);

		$("#table-1 img").attr("src", "/assets/img/empty-table.png");
		$("#table-1 img").css({"width": "140px","vertical-align": "middle"});
		$("#table-1 h3").text("0 guests");

		$("#table-1-notif").removeClass("badge-notify-pay");
	});

	$("#seat-button").click(function(){ //seat the unseated clear animation
		$(".uncleared-waitlist").stop().animate({"opacity": 0}, 300);
	});

	$("#table-1-notif").click(function(){
		$(this).removeClass("badge-notify-question");
		$(this).removeClass("badge-notify-info");
	});

	socket.on('paid', function(data) {
		var pricePaid = price;
		$(".uncleared-transactions #debt").text("$" + pricePaid);
		$(".uncleared-transactions").css("opacity","1");

		$("#table-1-notif").addClass("badge-notify-pay");
	});

	socket.on('question', function(data) {
		$("#table-1-notif").addClass("badge-notify-question");
	});

	socket.on('info', function(data) {
		$("#table-1-notif").addClass("badge-notify-info");
	});
});
