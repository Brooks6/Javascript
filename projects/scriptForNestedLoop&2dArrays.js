for(var i = 0; i < 3; i++){
	for( var j = 0; j < 3; j++){
		document.write("i = " + i + ", j = "+ j + "<br>");
	}
}

var numberGrid = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[0]
];

for(var m = 0; m < numberGrid.length; m++){
	document.write(numberGrid[m] + "<br>");
}

for(var q = 0; q < numberGrid.length; q++){
	for(var p = 0; p < numberGrid[q].length; p++){
		document.write(numberGrid[q][p] + "<br>");
	}
}