var React = require('react');

module.exports = Header = React.createClass({
	render: function(){
		return (
				<div className="b_surveys_header">
					<div className="b_surveys_header_content">
						<div className="b_surveys_header_appName">Surveys</div>
						<Points totalPoints={this.props.totalPoints} />
						<div className="b_surveys_header_userPic">UserPic</div>
					</div>
				</div>
			);
	}
});