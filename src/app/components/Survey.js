var React = require('react'),
Cards = require('./Cards'),
Text = require('./Text');

module.exports = Survey = React.createClass({
    render: function() {
        return ( 
        	<div className="b_surveys_survey b_surveys_island">
        		<Text />
        		<Cards data={this.props.data} onCardClick={this.props.onCardClick} />
            </div>
        );
    }
});
