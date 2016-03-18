Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('tasklist', {
  name: 'tasklist',
  controller: 'TasklistController',
  where: 'client'
});

Router.route('tasklist/add', {
  name: 'tasklistadd',
  controller: 'TasklistController',
  where: 'client',
  action: 'add'
});

Router.route('taskitem', {
  name: 'taskitem',
  controller: 'TaskitemController',
  where: 'client'
});

Router.route('taskitem/add', {
  name: 'taskitemadd',
  controller: 'TaskitemController',
  where: 'client',
  action: 'add'
});

Router.route('notes', {
  name: 'notes',
  controller: 'NotesController',
  where: 'client'
});

Router.route('notes/new', {
  name: 'newNote',
  controller: 'NotesController',
  where: 'client',
  action: 'create'
});

Router.route('animals', {
  name: 'animals',
  controller: 'AnimalsController',
  where: 'client'
});

Router.route('user/login', {
  name: 'userLogin',
  controller: 'userController',
  where: 'client'
});

Router.route('user/signup', {
  name: 'userSignup',
  controller: 'userController',
  where: 'client'
});