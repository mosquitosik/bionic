function getThird(a) {
    if (checkifArray(a)) {
      if (a.length > 2) {
        return a[2];
      } else {
        return "this aaray has no elemnt third";
      }
    }
    }

    switch (typeof a) {
      case 'string':
        return (a.length > 2) ? a.slice (2,3) : "str less tham 3";

      case "number":
        return a === 3 ? a : "this is not 3";
    }
    }

    function checkifArray (arr) {
      return Object.prototype.toString.call(arr) === '[object Array]' ? true : false;

    }

getThird ("24rew");
getThird (3);
getThird ([1,3,4,5]);



function isArray (a) {
  return Object.prototype.toString.call(a) === '[object Array]' ? true : false ;
}

function arr (b) {
  if (isArray(b)) {
      for (var i = 0; i < b.length; i++) {
        (typeof b[i] === 'function') ? b[i]() : console.log("not function");
      }
  }
}
