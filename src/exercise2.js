exports.run = function(input) {
  console.log("Exercise #2");

  var string=input.split(',');
  var somme=0;
  var total;
  string.forEach(element => {  
    element=parseInt(element);
    somme += Number(input[element]);
    console.log(input[element]);
  });


/*  for(var i= 0;i<string.lenght;i++){
    total += (string[i]);
}

var somme = Number(total);*/
  return Number(somme);
};
