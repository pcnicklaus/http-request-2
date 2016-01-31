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
      if(!this.ingredients) {
         this.ingredients = [];
      }

      var ingredient = {
         'text': text,
         'id': Math.floor(Date.now() / 1000) + text
      };
      //push it to a local array
      this.ingredients.push(ingredient);
      //update the List
      this.fireUpdate();

      HTTP.post('/ingredients', ingredient)
         .then(function(response) {
            this.getIngredients();
         }.bind(this));

   },

   fireUpdate: function() {
      this.trigger('change', this.ingredients);
   }
});

module.exports = IngredientStore;
