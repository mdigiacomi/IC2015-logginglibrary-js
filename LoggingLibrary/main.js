var model = {
    "AppGroup": "",
    "AppName": "",
    "AppVersion": "",
    "MessageType": "",
    "isBusinessEvent": "",
    "Message": "",
    "MessageDetails": "",
    "AdditionalProperties": {
        "LineOfBuisness": "Enterprise Collaboration"
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
  model.AppName = ApplicationName;
  model.Execution = ApplicationGroup;
  model.AppVersion = ApplicationVersion;
  model.Message = logarguments[0];
  if(logarguments[1])
  {
    model.MessageDetails = logarguments[1];
  }
  model.isBusinessEvent = "true"
  

  xhttp.open("POST", "http://10.150.165.18/Redis-Facade-Service/api/Logging", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(JSON.stringify(model));
}