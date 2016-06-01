sqLen = 10;

$(document).ready(function(){
	createSketchpad();
	$('#container .row').on('mouseenter', '.square', function(){
		currentColor = $(this).css('background-color');
		console.log(rgb2hex(currentColor));
		updateColor(this, rgb2hex(currentColor))
	});
});

function createSketchpad () {
	for (var i=0; i < sqLen; i++){
		$('#container').append("<div id='"+(i+1)+"' class='row'>");

		for (var j=0; j < sqLen; j++){
			$("#" + i).append('<div class="square"><div>');
		}
	}
};

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function updateColor(square, currentColor) {
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
};