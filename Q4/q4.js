var board = [
				['A', 'B', 'C', 'E'],
				['S', 'F', 'C', 'S'],
				['A', 'D', 'E', 'F']
			];


var counterObj = {};


for(var a = 0; a < board.length; a++){


	for(var b = 0; b < board[a].length; b++){

		if(!counterObj.hasOwnProperty(board[a][b])){
			counterObj[board[a][b]] = 1;
		}else{
			counterObj[board[a][b]] = counterObj[board[a][b]] + 1;
		}
	}
}


function start(){
  var inputString = document.getElementById('input-string').value;
  checkString(inputString);
};

function outPutAnswer(bool){
	document.getElementById('answer').innerHTML = 'text in board? ' + bool;
};


function checkString(str){

	var summaryObj = {};

	for(var i = 0; i < str.length; i++){

		if(!summaryObj.hasOwnProperty(str[i])){
			summaryObj[str[i]] = 1;
		}else{
			summaryObj[str[i]]++;
		}

		if(!counterObj.hasOwnProperty(str[i]) || summaryObj[str[i]] > counterObj[str[i]]){
			outPutAnswer(false);
			return false;
		}

		if( i === str.length -1){
			outPutAnswer(true);
			return true;
		}
	}
}
