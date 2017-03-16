
function start(){
  var inputString = document.getElementById('input-string').value;
  isPerfectSquare(parseInt(inputString));  // soultion 1
  // isPerfectSquare2(parseInt(inputString)); // souution2
};

/**
  Solution1 inspired from 
  http://burningmath.blogspot.tw/2013/09/how-to-check-if-number-is-perfect-square.html
**/
function isPerfectSquare(input){

	var outPutAnswer = function(bool){
	  document.getElementById('answer').innerHTML = 'Is that perfect square? ' + bool;
	};

    // init
    var init = function(){

      var numString = input.toString();
      var inputArray = numString.split('').map(function(item) {
        return parseInt(item, 10);
      });

	  step1(inputArray);

    };

	//step1 : All perfect squares end in 1, 4, 5, 6, 9 or 00
	var step1 = function(inputArray){

		var endNum = inputArray[inputArray.length -1];

		if(endNum === 2 || endNum === 3 || endNum === 7 || endNum === 8){
			outPutAnswer(false);
			return false;
		
		}else if(input < 10 && (endNum === 1 || endNum === 4 || endNum === 9) ){

			outPutAnswer(true);
			return true;
		}else{
			step2(inputArray);
		}
	};


	//step2: cannot be perfect square terminates in an odd number of zeros
	var step2 = function(inputArray){

		var countZero = 0;

		inputArray.map(function(item){
			if(item === 0){
				countZero++;
			}
		});

		if(countZero % 2 !== 0){
			outPutAnswer(false);
			return false;
		}else{
			step3(inputArray);
		}
	};

	//step3: cannot be perfect square terminates its last digit is 6 but its penultimate (tens) digit is even
	var step3 = function(inputArray){

		if(inputArray[inputArray.length - 1] === 6 && inputArray[inputArray.length - 2] % 2 === 0){
			outPutAnswer(false);
			return false;
		}else{
			step4(inputArray);
		}
	};

	//step4: cannot be perfect square terminates its last digit is not 6 but its penultimate (tens) digit is odd
	var step4 = function(inputArray){

		if(inputArray[inputArray.length - 1] !== 6 && inputArray[inputArray.length - 2] % 2 !== 0){
			outPutAnswer(false);
			return false;
		}else{
			step5(inputArray);
		}
	};

	//step5: cannot be perfect square terminates its last digit is 5 but its penultimate (tens) digit is other than 2
	var step5 = function(inputArray){

		if(inputArray[inputArray.length - 1] === 5 && inputArray[inputArray.length - 2] !== 2){
			outPutAnswer(false);
			return false;
		}else{
			step6(inputArray);
		}
	};

	//step6: cannot be perfect square terminates its last 2 digits are not divisible by 4 if it is even number
	var step6 = function(inputArray){

		for(var m = inputArray.length - 1 ; m >= 0; m--){
			if(inputArray[m] !== 0){
				break;
			}else{
			  inputArray.splice(m,1);
			}
		}
	
		if((inputArray[inputArray.length - 1] % 2 === 0) && (inputArray[inputArray.length - 1] % 4 === 0 && inputArray[inputArray.length - 2] % 4 === 0) ) {
			outPutAnswer(false);
			return false;
		}else{
			outPutAnswer(true);
			return true;
		}
	};

	init();
}



//solution 2
function isPerfectSquare2(input){
	for(var a = 1; a < input; a++){
  
  	if(a*a === input){
    	document.getElementById('answer').innerHTML = 'Is that perfect square? ' + 'true';
    	break;
    }
    
    if(a === input -1){
    	document.getElementById('answer').innerHTML = 'Is that perfect square? ' + 'false';
    }
  }	
}


