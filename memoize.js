_.memoize = function(func) {
  var objectOfArguments = {};

  return function() {
    var key = JSON.stringify(arguments);
    if (objectOfArguments[key] === undefined) {
      var result = func.apply(this, arguments);
      objectOfArguments[key] = result;
      return result;
    } else {
      return objectOfArguments[key];
    }
  };
};