function screenValue(value){
  var check = $("#screen").val();
  var decCheck=0;

  /*Check if there are two or more decimal*/
  for(var i = check.length-1; i > 0; i-- ){
    if(check[i] == "." && value == "." || (check.length ==1 && value == "." && check[i] == ".")){
      console.log("checked");
      decCheck = 1;
    } else if(operatorChecker(check[i])){
      break;
    }
  }
  //condition to replace to zero at the beginning
  if (check == "ERROR") {
    if(value == "c"){
      $("#screen").val("0");
    }else{
      $("#screen").val(value);
    }
  }else if (check.length == 1 && check == "0" && value != "c" && !(operatorChecker(value))) {
    $("#screen").val(value);
   //check if the user clicks on the operators multiple times
  }else if (operatorChecker(value) && (operatorChecker(check[check.length-1]))) {
  }else if (value == "." && decCheck != "0") {
    //more condition for decimal
  }else if (check == "." && value == ".") {
  //When the user clears
  }else if(value == "c"){
    if (check != "0"){
      $(".sneaky").val($(".result").val());
      $("#screen").val("0");
    }
  // Get the previous answer
  }else if (check.length == 1 && (operatorChecker(value)) && check == "0" && lastVal != 0) {
    $("#screen").val( + $(".sneaky").val() +value);
    var lastVal = 0;
  }else{
    $("#screen").val($("#screen").val() + value);
  }
}

/**Check for an of the operators**/
function operatorChecker(operator){
  if(operator =="+"|| operator == "-" || operator == "*" || operator == "/"){
    return true;
  }
  else{
    return false;
  }

}
/**Calculating the values on the screen**/
function ans(){
  var elem = $("#screen").val();
  var s = [];
  var i = 0;
  var brackCheck = 0;
  try{
    while(i < elem.length){
      if(elem[i] == "("){
        brackCheck++;
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
    }
    if(!isFinite(eval(ans))){
        $("#screen").val("ERROR");
    }else{
      $(".result").val(eval(ans));
      $("#screen").val("0");
    }
  }
  catch(err){
    $("#screen").val("ERROR");
  }

}
