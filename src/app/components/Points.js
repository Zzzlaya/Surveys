var React = require('react');

module.exports = Points = React.createClass({
	render: function(){
		var totalPoints = this.props.totalPoints;
		return (
			<div className="b_surveys_points">
				<span className="b_surveys_points_amount">{totalPoints}</span> points
			</div>
		);
	}
});