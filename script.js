$(document).ready(function() {
	createSketchpad(16);

	$('button').on('click', clear);

	$('#container').on('mouseenter', '.square', function(){
		currentColor = $(this).css('background-color');
		updateColor(this, currentColor)
	});
});

function createSketchpad (sqNum) {
	var $container = $('#container');
	for (var i=0; i < sqNum; i++){
		$container.append("<div id='"+i+"' class='row'>");

		var $row = $('#'+i);
		for (var j=0; j < sqNum; j++){
			$row.append('<span><div class="square"></span>');
		}
	}
	var sqLen = 512/sqNum;
	$('.square').css("width", sqLen);
	$(".square, .row").css("height", sqLen);
};

function updateColor(square, currentColor) {
	if (currentColor === "rgb(255, 255, 255)") {
		var r = parseInt((Math.random() * 256));
		var g = parseInt((Math.random() * 256));
		var b = parseInt((Math.random() * 256));
		console.log(r+", "+g+", "+b)
		$(square).css("background-color", "rgb("+r+","+g+","+b+")");
	} else {
		$(square).css("opacity", "-=0.1");
	}
	/*
	switch (currentColor) {
		case '#e5e5e5':
			$(square).css("background-color", "#cccccc");
			break;
		case '#cccccc':
			$(square).css("background-color", "#b2b2b2");
			break;
		case '#b2b2b2':
			$(square).css("background-color", "#999999");
			break;
		case '#999999':
			$(square).css("background-color", "#7f7f7f");
			break;
		case '#7f7f7f':
			$(square).css("background-color", "#666666");
			break;
		case '#666666':
			$(square).css("background-color", "#4c4c4c");
			break;
		case '#4c4c4c':
			$(square).css("background-color", "#323232");
			break;
		case '#323232':
			$(square).css("background-color", "#191919");
			break;
		case '#191919':
			$(square).css("background-color", "#000000");
			break;
		default:
	}
	*/
};

function clear() {
	$('.square').remove();
	$('.row').remove();
	var num = prompt("Cleared! Enter the number of squares per side (1-64): ", 16);
	createSketchpad(num);
};