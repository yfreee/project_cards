/*****************************************************************************/
/* Tasklist: Event Handlers */
/*****************************************************************************/
Template.Tasklist.events({
});

/*****************************************************************************/
/* Tasklist: Helpers */
/*****************************************************************************/
Template.Tasklist.helpers({
    tasklist: function(){
        return Tasklist.find();
    }
});

/*****************************************************************************/
/* Tasklist: Lifecycle Hooks */
/*****************************************************************************/
Template.Tasklist.onCreated(function () {
});

Template.Tasklist.onRendered(function () {
});

Template.Tasklist.onDestroyed(function () {
});
