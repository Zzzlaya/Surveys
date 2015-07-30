var React = require('react'),
    PageLayout = React.createFactory(require('./components/PageLayout'));

// Check if we're in the browser
if (typeof window != "undefined") {
	 window.onload = function() {
        React.render(PageLayout(), document.querySelector('.b_surveys_container'));
    };
}
