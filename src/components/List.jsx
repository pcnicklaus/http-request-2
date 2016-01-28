var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpService.js');

var List = React.createClass({
   getInitialState: function () {
      return {ingredients: []};
   },

   //web requests. when components have mounted. all children have mounted and now the component is ready to go ALL WEB REQUESTS DONE HERE!
   // calling BIND so THIS is linked to the COMPONENT instead of the function!!!!
   componentWillMount: function () {
      HTTP.get('/ingredients')
         .then(function(data) {
            // console.log('Data: ', data)
            this.setState({
               ingredients: data
            });
         }.bind(this));
   },

   render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
