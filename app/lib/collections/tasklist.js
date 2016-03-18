Tasklist = new Mongo.Collection('tasklist');
Tasklist.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: " ",
    max: 100
  },
  position: {
    type: Number,
    label: "Position",
    optional: true
  }
}));

if (Meteor.isServer) {
  Tasklist.allow({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });

  /*Tasklist.deny({
    insert: function (userId, doc) {
      return true;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },

    remove: function (userId, doc) {
      return true;
    }
  });*/
}
