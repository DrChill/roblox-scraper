var User = require('./lib/user.js');
var AssetType = require('./lib/asset-type.js');
var Game = require('./lib/game.js');

exports.getUser = function(nameOrId) {
	return new User(nameOrId);
};

exports.getGame = function(id) {
	return new Game(id);
}

exports.AssetType = AssetType;