var HTTP = require('../services/httpService');
var Reflux = require('reflux');
var Actions = require('./actions.jsx')

var IngredientStore = Reflux.createStore({
   listenables: [Actions],

   getIngredients: function() {
      HTTP.get('/ingredients')
         .then(function(json) {
            this.ingredients = json;
            this.fireUpdate();
         }.bind(this));
   },

   postIngredient: function(text) {
      // posted ingred to server
      // got a successful callback
      // trigger is reflux

   },
   
   fireUpdate: function() {
      this.trigger('change', this.ingredients);
   }
});

module.exports = IngredientStore;
