
var steps = [];

steps.record = function(step) {
  this.push(step);
};

var Step = function(type, name, isError, exception) {
  this._type = type;
  this._name = name;
  this._isError = isError;
  this._exception = exception;
}

function story(name, f) {
  var exception = false;
  try {
    f();
  } catch (e) {
    exception = true;
    steps.record(new Step('story', name, exception, e));    
  }
  if (!exception) {
    steps.record(new Step('story', name, false));
  }

  for (var i = 0; i < steps.length; i++) {
    
  }    
}

function scenario(name, f) {
  steps.push(arguments);
  f();
}

function given(name, f) {
  write("given: ");
  steps.push(arguments);
  f();
}

function when(name, f) {
  write("when: ");
  steps.push(arguments);
  f();
}

function then(name, f) {
  var exception = false;
  try {
    f();
  } catch (e) {
    exception = true;
    steps.record(new Step('then', name, exception, e));    
  }
  if (!exception) {
    steps.record(new Step('then', name, false));
  }
}

function and(name, f) {
  write("and: ");
  steps.push(arguments);
  f();
}

function areEqual(first, second, message) {
  if (first != second) throw message;
}

var write = function(message) {
  $('#hello').html($('#hello').html + ' ' + message);
};

