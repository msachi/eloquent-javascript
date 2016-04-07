/*
Write a loop that makes seven calls to console.log to output the following triangle:
#
##
###
#### 
#####
######
#######
*/

function triangle(num) {
  var output = "";
  for (var i=0; i<=num; i++) {
    output += "#";
    console.log(output);
  }
}
