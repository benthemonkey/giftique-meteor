AccountsGuest.enabled = true;

Answer = new Mongo.Collection('answers');

if (Meteor.isClient) {
  Template.body.events({
    "submit .question-form": function(event) {
      console.log(event.target[0].value);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    AccountsGuest.anonymous = true;
  });
}
