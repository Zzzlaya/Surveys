var React = require('react');

module.exports = Card = React.createClass({
	handleChange: function(){
		this.props.onCardClick();
	},
	render: function(){
		var card = this.props.card;
		return (
			<div className="b_surveys_card">
				<div className="b_surveys_card_frame" onClick={this.handleChange}>
					<div className="b_surveys_card_product-name" title={card.item_name}>{card.item_name}</div>
					<div className="b_surveys_card_name">{card.brand_name}</div>
					<div className="b_surveys_card_value">{card.nf_calories} kcal</div>
				</div>				
			</div>
		);
	}
});