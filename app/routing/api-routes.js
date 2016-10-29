var friendsData = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		var userData = friendsData.friendsArray;
		res.json(userData);
	});

	app.post('/api/friends', function(req, res){
		friendsData.friendsArray.push(req.body);
	})
};
