
Login with GitHub
Raw (R)
Copy URL (CMD/CTRL+C)

Please note that all pasted data is publicly available.
cartalyst
Well coded, documented, tested & maintained packages.
 function choise(par, a, b) {
    var answer;
    switch (par) {
        case 'multiply':
            answer = a * b;
            break;

        case 'divide':
            answer = a / b;
            break;

        case 'pow':
            answer = Math.pow(a, b);
            break;

        case 'plus':
            answer = a + b;
            break;
    }
    return answer;
}

function add(a, b) {
    return choise('plus', a, b);
}

function divide(a, b) {
    return choise('divide', a, b);
}

function pow(a, b) {
    return choise('pow', a, b);
}

function multiply(a, b) {
    return choise('multiply', a, b);
}



function choise(par) {

 return function mat (a,b) {
   var answer;
    switch (par) {
        case 'multiply':
             answer = a * b;
            break;

        case 'divide':
            answer = a / b;
            break;

        case 'pow':
            answer = Math.pow(a, b);
            break;

        case 'plus':
            answer = a + b;
            break;
    }
    return answer;
}
}

var pow = choise('pow');

var i = 1;
function counter() {
  return function (){
    return ++i;
  };
}



function clone (a) {
  if (Array.isArray(a)){
    var arr = [];
    for (var i = 0; i < a.length; i++) {
      arr.push[a];
    }

} return arr;
}


function meth () {
}

  meth.accept = function(obj, arr) {

  }

  meth.return = function() {
    return this;
  }



  function firstfunction(time, callback) {
    var Date1 = Date.now();
    console.log (Date1);
      callback () = setTimeout(function() {
          Date2 = Date.now();
          consol.log (Date2);
      }, time);
  }

  firstfunction(callbackfunction);
