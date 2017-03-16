function start(){
  var inputString = document.getElementById('input-string').value;
  reverseFun(inputString);
};


function reverseFun(input){

  var reserseString = input.split('').reverse().join('');

  document.getElementById('answer').innerHTML = 'Answer:' + reserseString;
}

