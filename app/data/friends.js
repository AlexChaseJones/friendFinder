var friendsObj = {
	friends: [],
	addFriend: function(friend){
		this.friends.push(friend);
	},
	bestMatchFinder: function(scores){
		if (this.friends.length == 0) {
			console.log('not enough data to find a match');
			return { match: 'Not enough data to find a match', difference: 'N/A'}
		} else {
			var total = scores.reduce(function(a, b) {
	  			return a + b;
			});
			var closest = Infinity;

			for (var i = 0; i < this.friends.length; i++) {
				var friendScore = this.friends[i].scores.reduce(function(a, b) {
	  				return a + b;
				});
		
				if (Math.abs(total - friendScore) < closest) {
					bestMatch = this.friends[i].name;
					closest = Math.abs(total - friendScore);
				}
			}
			return { match: bestMatch, difference: closest }
		}
	}
}

module.exports = friendsObj;