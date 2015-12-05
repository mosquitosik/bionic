

function logWriter (instruction) {
  console.log ('-------------------------------------------');
  console.log('Going to execute instruction: ' + instruction);
  console.log(eval(instruction));
}

function generateRandomInt (minLength, maxLength){
  return (Math.floor(Math.random() * (maxLength - minLength + 1) + minLength));
}

function generateRandomChar (string) {
  return string.charAt(Math.floor(Math.random() * (string.length - 0 + 1) + 0));
}

function stringInstructionGenerator (a, obj) {
  var firstInt = generateRandomInt(0, a.length);
  var secondInt = generateRandomInt(firstInt, a.length);

  console.log('!!!LOGER!!! Argument: ' + a + ', TypeOf: ' + typeof a + '\n');

  for (key in obj) {
    if (obj[key] == 'int') {
      var instructionInt = '"' + a + '"' + '.' + key + '(' + firstInt + ')';
      logWriter(instructionInt);
    } else if (obj[key] == 'int int') {
      var instructionIntInt = '"' + a + '"' + '.' + key + '(' + firstInt + ',' + secondInt + ')';
      logWriter(instructionIntInt);
    } else if ((obj[key] == '')) {
      var instructionWithNoArg = '"' + a + '"' + '.' + key + '()';
      logWriter(instructionWithNoArg);
    } else if ((obj[key] == 'str')) {
      var instructionStr = '"' + a + '"' + '.' + key + '(' + '"' + generateRandomChar(a) + '"' + ')';
      logWriter(instructionStr);
    }
  }
}

function arrayInstructionGenerator(a, obj) {

  var randomIndex = (0, a.length);
  console.log('!!!LOGER!!! Argument: ' + a + ', TypeOf: ' + typeof a + '\n');

  for (key in obj) {
    if ((obj[key] == '')) {
      var instruction = '[' + a + ']' + '.' + key + '()';
      logWriter(instruction);
    } else if(obj[key] == 'int') {
      var instructionInt = '[' + a + ']' + '.' + key + '(' + randomIndex + ')';
      logWriter(instructionInt);
    }
  }
}

function numberInstructionGenerator(a, obj) {
  console.log('!!!LOGER!!! Argument: ' + a + ', TypeOf: ' + typeof a + '\n');

  for (key in obj) {
    if (obj[key] == '') {
      var instruction =  '(' + a + ')' + '.' + key + '()';
      logWriter(instruction);
    } else if (obj[key] == 'int') {
      var instructionInt =  key + '(' + '"' + a + '"' + ')';
      logWriter(instructionInt);

    }
  }
}

function checkIfArray (arr) {
  return (arr.constructor === Array) ? true : false;
}

function parseType (input) {
//  var input = prompt ('Enter type for which you want to see available methods:')
  var STRING_METHODS = {
                        'indexOf': 'str',
                        'lastIndexOf': 'str',
                        'search': 'str',
                        'slice': 'int int',
                        'substring': 'int int',
                        'substr': 'int int',
                        //'replace': 'str str',
                        'toUpperCase': '',
                        'toLowerCase': '',
                        //'concat': ,
                        'charAt': 'int',
                        'charCodeAt': 'int',
                        'split': ''
                      };

    var ARRAY_METHODS = {
                        'toString': '',
                        'join': '',
                        'pop': '',
                        'push': '',
                        'shift': '',
                        'unshift': '',
                        //'delete': 'int',
                        //'splice': '',
                        'sort': '',
                        'reverse': '',
                        //'concat': '',
                        'slice': '',
                        'valueOf': ''
                        };

    var NUMBER_METHODS = {
                      'toString': '',
                      'toExponential': '',
                      'toFixed': '',
                      'toPrecision': '',
                      //'Number': '',
                      'parseInt': 'int',
                      'parseFloat': 'int',
                      'valueOf': ''
                      };

    if (checkIfArray(input)) {
      arrayInstructionGenerator (input, ARRAY_METHODS);
      return;
    }


      switch (typeof input) {
        case 'string':
          stringInstructionGenerator (input, STRING_METHODS);
          break;

        case 'number':
          numberInstructionGenerator (input, NUMBER_METHODS);
          break;

        default:
        console.log('unsupported type');

      }
}


parseType("yura dubinin");
parseType(1234,3);
parseType([1,2,1,3,2,1]);
