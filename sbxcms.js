PlayersList = new Mongo.Collection('players');

if (Meteor.isClient) {
  //console.log('Hola cliente');
  Template.leaderboard.helpers({
    'players': function(){
      return PlayersList.find({},{sort:{name:-1}});
    },

    'selectedClass':function(){
      var playerId =  this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    }

  });

  Template.leaderboard.events({
    'click .player':function(){
      var playerId = this._id; 
      Session.set('selectedPlayer',playerId);
    }
  });
}

if (Meteor.isServer) {
  //console.log('Hola Server');
}
