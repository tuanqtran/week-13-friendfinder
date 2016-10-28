var friendsData = require('../data/friends.js');

module.exports = function(app){
	app.get('/api/friends', function(req, res){
		res.json(friendsData.friendsArray);
	});

	app.post('/api/friends', function(req, res){
		var newUser = req.body;
		var userData = friendsData.friendsArray;
		userData.push(newUser);
		var match;
		var potentialMatch = 0;

		function diffArray() {
			var difference = [];
			for(var j=0; j<userData.length - 1;j++){
				for(var i=0; i<newUser.score.length;i++){
					potentialMatch += Math.abs(newUser.score[i] - userData[j].score[i]);
				}
				difference.push(potentialMatch);
				console.log(difference);
				match = Math.min.apply(Math, difference);
				console.log("This is the lowest value: " + match);
				potentialMatch = 0;

			}
		}
		diffArray();

	})
};
