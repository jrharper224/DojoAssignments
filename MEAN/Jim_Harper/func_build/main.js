function runningLogger (){
  console.log('I am running!');
}

function multiplyByTen (a){
  var b = a*10
  return b;
}

function stringReturnOne (){
  return "This is string one";
}

function stringReturnTwo (){
  return "This is string two";
}

function caller (c){
  if(typeof(c) == 'function'){
  c();
  }
}

function myDoubleConsoleLog(a,b) {
  if( typeof(a) == 'function' && typeof(b) == 'function'){
    console.log(a(), b());
  }
}

function caller2 (a) {
  console.log("starting");
  var x = setTimeout(function(){
    if (typeof(a) == "function"){
      a(stringReturnOne, stringReturnTwo)
    }
  }, 2000);
  console.log('ending?');
  return "interesting";
}


runningLogger();
multiplyByTen(5);
stringReturnTwo();
stringReturnOne();
myDoubleConsoleLog(stringReturnOne, stringReturnTwo);
caller2(myDoubleConsoleLog);
