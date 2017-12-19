exports.run = function(input) {
  console.log("Exercise #1");
  var total=0;
  var newTableau = [];

	while (total<3) {
		console.log(input[total]);
		newTableau.push(input[total]);
		total= total + 1;
	}
	return newTableau;
};