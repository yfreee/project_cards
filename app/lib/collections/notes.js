Notes = new Mongo.Collection('notes');
Notes.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 100
  },
  content: {
    type: String,
    label: "text",
    max: 100
  },
  private: {
    type: String,
    label: "Private",
    allowedValues: ['yes', 'no'],
    optional: true
  },
  month: {
    type: Number,
    label: "Month",
    optional: true
  }
}));

if (Meteor.isServer) {
  Notes.allow({
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

  /*Notes.deny({
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
