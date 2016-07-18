// to run : `node helloworld.js`

function say(word) {
  console.log(word);
}

function execute (someFunction, argument) {
  someFunction(argument);
}

execute(say, 'hello');
