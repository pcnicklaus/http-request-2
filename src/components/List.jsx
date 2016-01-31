var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../reflux/actions.jsx');
var IngredientStore = require('../reflux/ingredients-store.jsx');

var List = React.createClass({

   //publically available
   // listen for any changes in the store
   mixins: [Reflux.listenTo(IngredientStore, 'onChange')],

   getInitialState: function () {
      return {ingredients: [], newText: ''};
   },
   componentWillMount: function () {
      Actions.getIngredients();
   },
   onChange: function(event, ingredients) {
      this.setState({ingredients: ingredients});
   },
   onInputChange: function(event) {
      this.setState({newText: event.target.value})
   },
   onClick: function (event) {
      if (this.state.newText) {
         Actions.postIngredient(this.state.newText);
      }
      this.setState({newText: ''})
   },
   render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem
               key={item.id} ingredient={item.text}
                   />
        });

        return (
           <div>
             <input
                placeholder="Add Item"
                value={this.state.newText}
                onChange={this.onInputChange}
             />

             <button
                onClick={this.onClick}>
                AddItem
             </button>

               <ul>{listItems}</ul>
           </div>
        );
    }
});

module.exports = List;
