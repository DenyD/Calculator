$(document).ready(function(){
  
  var inputs=[""];
  var totalVal;
  var operators=["+", "-", "*","/"];
  var operator=["."];
  var num=[0,1,2,3,4,5,6,7,8,9];
  
  
  function getVal(input){
    if(operator.includes(inputs[inputs.length-1])===true && input==="."){
      console.log("Duplicate '.' ")
    }
    else if(num[inputs.length-21]){
      inputs.push();
    }
    else if(inputs.length===1 && operators.includes(input)===false){
      inputs.push(input);
    }
    else if(operators.includes(inputs[inputs.length-1])===false){
      inputs.push(input)
    }
    else if(num.includes(Number(input))){
      inputs.push(input);
    }
    update()
  }
  
  function update(){
    totalVal=inputs.join("");
    $("#steps").html(totalVal)
  }
  function getTotal(){
    totalVal=inputs.join("");
    $("#steps").html(eval(totalVal));
  }
 
  
  
  $("button").on("click", function(){
    if (this.id==="delete"){
      inputs=[""];
      update();
    }
    else if(this.id==="back"){
      inputs.pop();
      update();
    }
    else if(this.id==="total"){
      getTotal();
    }
    else{
      if(inputs[inputs.length-1].indexOf("+","-","/","*",".")===-1){
         getVal(this.id);
         }
         else {
         getVal(this.id)
         }
    }
  })
  
});