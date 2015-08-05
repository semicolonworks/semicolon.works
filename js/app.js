'use strict';

var config = require('../config.json');
var configDev = require('../config.dev.json');
var $ = require('jquery');
var _ = require('lodash');

/* global page */
if (page.env === 'dev') {
	_.extend(config, configDev);
}

$(document).ready(function(){
	console.log('We\'re ready!');
});
