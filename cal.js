function screenValue(value){
  var check = $("#screen").val();
  var decCheck=0;
  for(var i = check.length-1; i > 0; i-- ){
    console.log("dec " + check[i]);
    if(check[i] == "." || (check.length ==1 && value == "." && check[i] == ".")){
      decCheck = 1;
    } else if(operatorChecker[check[i]]){
      break;
    }
  }
  //condition to replace to zero at the beginning
  if (check == "ERROR") {
    $("#screen").val("0");
  }else if (check.length == 1 && check == "0" && value != "c" && !(operatorChecker(value))) {
    console.log("beginning");
    $("#screen").val(value);
   //check if the user clicks on the operators multiple times
  }else if (operatorChecker(value) && (operatorChecker(check[check.length-1]))) {
      console.log("Can't do that.");
  }else if (value == "." && decCheck != "0") {
    console.log("Only one decimal for a number.");
    //more condition for decimal
  }else if (check == "." && value == ".") {
    console.log("Only one decimal for a number, please.");
  //When the user clears
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
  }else{
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
  try{
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
    console.log("done " + eval(ans));
    $(".result").val(eval(ans));
  }
  catch(err){
    $("#screen").val("ERROR");
  }

}
