var React = require('react'),
Card = require('./Card');

module.exports = Cards = React.createClass({
    render: function() {
        var cards,
            onCardClickValue = this.props.onCardClick;
        if (this.props.data) {
            cards = this.props.data.hits.map(function(oneCard){
                return (
                    <Card card={oneCard.fields} key={oneCard._id} onCardClick={onCardClickValue}/>
                )
            });
        } else {
            cards = '';
        }

        return ( 
        	<div className="b_surveys_cards">
        		{cards}
            </div>
        );
    }
});