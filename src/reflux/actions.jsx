// define the actions you want to put in your project to interact with components and data store.

var Reflux = require('reflux');

var Actions = Reflux.createActions([
   'getIngredients',
   'postIngredient'
]);

module.exports = Actions;
