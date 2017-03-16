
var oringinalArray = [[1,2],[3,5],[6,7],[8,10],[12,16]];
// var oringinalArray = [[1,3],[6,9]];


Array.prototype.insert = function(index, item) {
  this.splice(index, 0, item);
};

function start(){

  var input1 = parseInt(document.getElementById('input-string1').value);
  var input2 = parseInt(document.getElementById('input-string2').value);

  if(input1 >= input2){
  	alert('integer 1 must smaller than integer 2');
  	return false;
  }

  for(var i = 0; i < oringinalArray.length; i++){

  	if(input1 === oringinalArray[i][0] || input1 === oringinalArray[i][1]){
  		alert('repeat number in array!');
  		return false;
  	}

  	if(input2 === oringinalArray[i][0] || input2 === oringinalArray[i][1]){
  		alert('repeat number in array!');
  		return false;
  	}

  }

  arrangeArray([input1,input2]);
  
};


function arrangeArray(insertArray){

	var head = insertArray[0];
	var end = insertArray[1];

	var copyOringinalArray = oringinalArray.slice(0);

	/** Answer Alert **/
	var outputAnswer = function(){
	  var answerString = '';
	  for(var i = 0; i < copyOringinalArray.length; i++){
	    answerString = answerString + '[' + copyOringinalArray[i].toString() + ']';
	  }
	  document.getElementById('answer').innerHTML = 'output array: ' + answerString;
	};


	/** check is array overlay **/
	var isOverLay = function(array1, array2, callback) {

	  if (array1[0] < array2[1] && array1[0] > array2[0]) {
	    callback(true);
	  } else {
	    callback(false);
	  }
	};

	/** merge Array **/
	var arrayMerge = function(index) {

	  var array1 = copyOringinalArray[index - 1];
	  var array2 = copyOringinalArray[index];

	  var tempArray = array1.concat(array2).sort(function(a, b) {
	    return a - b
	  });

	  var newSubArray = [tempArray[0], tempArray[tempArray.length - 1]];


	  copyOringinalArray.splice(index - 1, 2);
	  copyOringinalArray.insert(index - 1, newSubArray)

	  if(copyOringinalArray.length <= index){
	  	outputAnswer();
	  	return;
	  }

	  isOverLay(copyOringinalArray[index], copyOringinalArray[index - 1], function(isOverLay) {

	    if (isOverLay) {
	      arrayMerge(index);
	    } else {
	      outputAnswer();
	    }
	  });
	};

	/** find insert Array position **/
	var findStart = function(index) {

	  if (head > copyOringinalArray[index][0]) {

	  	if(index === copyOringinalArray.length -1){
	  		copyOringinalArray.insert(index + 1, insertArray);
	  		outputAnswer();
	  		return;
	  	}

	    findStart(index + 1);
	  } else {

	    copyOringinalArray.insert(index, insertArray);

	    var startIndex = (index === 0) ?  index + 1: index;

	    isOverLay(copyOringinalArray[startIndex], copyOringinalArray[startIndex - 1], function(isOverLay) {

	      if (isOverLay) {
	        arrayMerge(startIndex);
	      } else {
	        outputAnswer();
	      }
	    });
	  }
	};

	findStart(0);
}


