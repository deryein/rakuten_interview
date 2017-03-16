function start(){

  var num1 = document.getElementById('num-1').value;
  var num2 = document.getElementById('num-2').value;
  sum(num1, num2)
}


function sum(a, b){

  var progeess = function(x, y){

    var carry = x & y;
    var num = x ^ y;

    if(carry !== 0){
    	carry = carry << 1;
    	progeess(num, carry);
    }else{
      document.getElementById('answer').innerHTML = 'Answer:' + num;
    }
  };
  progeess(a, b);
}

