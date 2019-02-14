var lastVal = 0;

function screenValue(value){
  var check = $("#screen").val();
  //condition to replace to zero at the beginning
  if (check.length == 1 && check == "0" && value != "c" && !(operatorChecker(value))) {
    console.log("beginning");
    $("#screen").val(value);
   //check if the user clicks on the operators multiple times
 }else if (operatorChecker(value) && (operatorChecker(check[check.length-1]))) {
      console.log("Can't do that.");
//Clearing..
}else if(value == "c"){
    if (check != "0"){
      $(".sneaky").val($(".result").val());
      $("#screen").val("0");
      console.log("cleared " + $(".sneaky").val());
    }
  // Get the previous answer
}else if (check.length == 1 && (operatorChecker(value)) && check == "0" && lastVal != 0) {
    console.log("Last " + lastVal );
    $("#screen").val( + $(".sneaky").val() +value);
    var lastVal = 0;
  }
  else{
    console.log("appending...");
    $("#screen").val($("#screen").val() + value);
  }
}

function operatorChecker(operator){
  if(operator =="+"|| operator == "-" || operator == "*" || operator == "/"){
    return true;
  }
  else{
    return false;
  }

}

function ans(){
  var elem = $("#screen").val();
  console.log("elem " + elem[i-1]);
  var s =[];
  var i = 0;
  var brackCheck = 0;

  while(i < elem.length){
    if(elem[i] == "("){
      brackCheck++;
      console.log("++ " + brackCheck);
    }

    if(elem[i] == ")"){
      brackCheck--;
    }

    if(elem[i] == "(" && !(isNaN(elem[i-1]))) {
      s.push("*");
      s.push("(");
      i++;
    }else{
      s.push(elem[i]);
      i++;
    }
    var ans = s.join('');
    console.log("s "+ ans);
  }
  if(brackCheck != 0){
    $("#screen").val("ERROR");
  }else if (operatorChecker(elem[elem.length -1])) {
    $("#screen").val("ERROR");
  }else{
    console.log("done " + eval(ans));
    $(".result").val(eval(ans));
  }

  /*if (eval($("#screen").val) != ''){
    console.log("hi1");
    $("#result").val(eval($("#screen").val));
  }else{
    console.log("hi2");
    $("#result").val("ERROR");}*/
}
