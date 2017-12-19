exports.run = function(input) {
  console.log("Exercise #5");
  var fileSystem=new ActiveXObject("Scripting.FileSystemObject");
  var monfichier=fileSystem.OpenTextFile(input, 1 ,false);
  console.log(monfichier.ReadAll());
 /* for (var i = 0; i < monfichier.length; i++) {
  	
  }*/
};
