var JsBdd = {};

JsBdd.steps = [];

JsBdd.record = function(step) {
  this.steps.push(step);
};

JsBdd.Step = function(type, name, isError, exception) {
  this._type = type;
  this._name = name;
  this.isError = isError;
  this._exception = exception;
  this.toString = function() {
    return this._type + " " + this._name + " " + !this.isError;
  };
}

JsBdd.test = function() {
  var anyError = false;  
  for (var i = 0; i < this.steps.length; i++) {
    console.log(this.steps[i].toString());
    if (this.steps[i].isError) { 
      anyError = true;
    }
  }
  if (anyError) {
    console.log('OH No!! A test failed!');
  }
};

function story(name, f) {
  JsBdd.record(new JsBdd.Step('story', name, false));  
  f();  
}

function scenario(name, f) {
  JsBdd.record(new JsBdd.Step('scenario', name, false));
  f();
}

function given(name, f) {
  f();
  JsBdd.record(new JsBdd.Step('given', name, false));
}

function when(name, f) {
  f();
  JsBdd.record(new JsBdd.Step('when', name, false));
}

function then(name, f) {
  var exception = false;
  try {
    f();
  } catch (e) {
    exception = true;
    JsBdd.record(new JsBdd.Step('then', name, exception, e));
  }
  if (!exception) {
    JsBdd.record(new JsBdd.Step('then', name, false));    
  }
}

function and(name, f) {
  f();
  JsBdd.record(new JsBdd.Step('and', name, false));
}

function areEqual(first, second, message) {
  if (first !== second) throw message;
}

