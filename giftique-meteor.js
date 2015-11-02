AccountsGuest.enabled = true;

Answer = new Mongo.Collection('answers');

if (Meteor.isClient) {
  Template.body.events({
    "submit .question-form": function(event) {
      console.log(event.target[0].value);
    }
  });

  // render a question?
  var q = questions[0];
  // need helpers to turn string comparisons into bools
  q.isShortAnswer = q.type == 'short-answer';
  Template.question.helpers(q);
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    AccountsGuest.anonymous = true;
  });
}
