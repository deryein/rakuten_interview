
var oringinalArray = [[1,2],[3,5],[6,7],[8,10],[12,16]];

function start(){

  var input1 = parseInt(document.getElementById('input-string1').value);
  var input2 = parseInt(document.getElementById('input-string2').value);

  if(input1 >= input2){
  	alert('integer 1 must smaller than integer 2');
  }else{

  	mergeArray([input1,input2]);
  }

};


	function mergeArray(insertArray){

		var copyArray = oringinalArray.slice(0);

		Array.prototype.insert = function ( index, item ) {
		    this.splice( index, 0, item );
		};

		var head = insertArray[0];
		var end = insertArray[1];


		var isOverLay = function(array1 , array2, callback){

			if(array1[0] < array2[1] && array1[0] > array2[0]){
				callback(true);
			}else{
				callback(false);
			}
		};


		var arrayMerge = function(index){


			var array1 = copyArray[index -1];
			var array2 = copyArray[index];

			var tempArray = array1.concat(array2).sort(function(a, b){return a - b});

			console.log('----------------------------------------------');
			console.log(tempArray);

			var newSubArray = [tempArray[0], tempArray[tempArray.length -1]];


			copyArray.splice(index-1, 2);
			copyArray.insert(index - 1, newSubArray)

			isOverLay(copyArray[index], copyArray[index -1], function(isOverLay){

				if(isOverLay){

					arrayMerge(index);

				}else{
					console.log('got you');
					console.log('====================');
					console.log(copyArray);
				}


			});




		};



		var findStart = function(index){

			if(head > copyArray[index][0]){
				findStart(index + 1);
			}else{

				copyArray.insert(index, insertArray);

				isOverLay(copyArray[index], copyArray[index -1], function(isOverLay){

					if(isOverLay){
						arrayMerge(index);
					}else{
						console.log('got you');
						console.log('====================');
						console.log(copyArray);
					}

				});

			}



		};


		findStart(0);
	}



	// mergeArray();