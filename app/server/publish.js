


Meteor.publish('home', function () {
  return Home.find();
});

Meteor.publish('notes', function () {
  return Notes.find();
});

Meteor.publish('animals', function () {
  return Animals.find();
});

Meteor.publish('tasklist', function () {
  return Tasklist.find();
});