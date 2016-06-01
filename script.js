var sqLen = 10;

for (var i=0; i < sqLen; i++){
	var row = $('<div>', {class: "row", id: i});
	$('.container').append(row);

	for (var j=0; j < sqLen; j++){
		var square = $('<div>', {class: "square"});
		$("#" + i).append(square);
		console.log(j);
	}
	console.log(i);
}

$(document).ready(function() {


});

