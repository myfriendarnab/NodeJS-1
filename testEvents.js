//Based on observer pattern Observer/eventHandler/Listener will be trigerred by emitting the event by eventemitter
//We will create a event called "door bell", and upon that bell will ring, 
//which will triger next event called "open door" which will be listened and show "welcome XXXXX"

var evt = require("events");

//create eventEmitter object
var evtEmitter = new evt.EventEmitter();

var OnDoorBellEventHandler = function(){
    console.log("ring ring ring");
    evtEmitter.emit("opendoor","ARNAB")
};

var OnOpenDoorEventHandler = function(msg){
    console.log("Welcome " + msg);
};

evtEmitter.on("doorbell", OnDoorBellEventHandler);
evtEmitter.on("opendoor", OnOpenDoorEventHandler);

evtEmitter.emit("doorbell");

//Now checking "this" to listener
//here "this" will refer to evtEmitter object itself
evtEmitter.on("SomeEvent",function(a,b){
    console.log(a,b,this);
});

evtEmitter.emit("SomeEvent","a","b");

//Use of EventEmitter.addlistener and remove listener

var evt = require("events");
//create eventEmitter object
var evtEmitter = new evt.EventEmitter();

var OnDoorBellEventHandler = function(){
    console.log("ring ring ring");
};

var OnOpenDoorEventHandler = function(msg){
    console.log("Welcome " + msg);
};

evtEmitter.addListener("doorbell", OnDoorBellEventHandler);
evtEmitter.addListener("doorbell", OnOpenDoorEventHandler);

evtEmitter.emit("doorbell","ARNAB");