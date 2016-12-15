/**
 * Created by Riven on 2016/12/15.
 */
"use strict";

var EventEmitter = require('events');
var SerialConnection = require('./SerialConnection');
var UpdateManager = require('./UpdaterManager');
var ArduinoManager = require('./ArduinoManager');
var Toolbox = require('./Toolbox');
var ResourceManager = require('./ResourceManager');

var KittenBlock = function () {
    var instance = this;
    instance.serial = new SerialConnection();
    instance.updater = new UpdateManager();
    instance.arduino = new ArduinoManager();
    instance.toolbox = new Toolbox();
    instance.resourcemng = new ResourceManager();


};

module.exports = KittenBlock;
