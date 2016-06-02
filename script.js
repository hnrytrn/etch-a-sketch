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

		for (var j=0; j < sqNum; j++){
			$('#'+i).append('<div class="square">');
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
};

function clear() {
	$('.square').remove();
	$('.row').remove();
	var num = prompt("Cleared! Enter the number of squares per side (1-64): ", 16);
	createSketchpad(num);
};