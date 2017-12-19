exports.run = function(input) {
  console.log("Exercise #1");
  var total=0;

	while (total<3) {
		console.log(input[total]);
		var newTableau = [];
		newTableau = newTableau.push(input[total]);
		total= total + 1;
	}
	return newTableau;
};