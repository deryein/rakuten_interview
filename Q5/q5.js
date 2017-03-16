function sum(a, b){

  var progeess = function(x, y){

    var carry = x & y;
    var num = x ^ y;

    if(carry !== 0){
    	carry = carry << 1;
    	progeess(num, carry);
    }else{
    	alert(num);
    }
  };
  progeess(a, b);
}

sum(6,2);