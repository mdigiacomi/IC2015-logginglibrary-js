var model = {
    "Execution": "test",
    "AppName": "IC Test Application",
    "AppVersion": "v1.0.1",
    "MessageType": "Info",
    "isBusinessEvent": "true",
    "Message": "This is a test Message",
    "MessageDetails": "StackTrace Coming Soon...",
    "AdditionalProperties": {
        "Error Number": "1234"
    }
};

var xhttp = new XMLHttpRequest();

var _log = console.log,
    _warn = console.warn,
    _error = console.error;

console.log = function() {
    logerrors(arguments, "Info");
    return _log.apply(console, arguments);
};

console.warn = function() {
    logerrors(arguments, "Warn");
    return _warn.apply(console, arguments);
};

console.error = function() {
    logerrors(arguments, "Error");
    return _error.apply(console, arguments);
};

function logerrors(logarguments, messageType){
  
  model.MessageType = messageType;
  model.Message = logarguments;
  
  debugger;
  xhttp.open("POST", "http://dev.digitaladrenalin.net:3000/RedisFacade", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send("fname=Henry&lname=Ford");
}