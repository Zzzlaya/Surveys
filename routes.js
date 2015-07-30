var JSX = require('node-jsx').install(),
    React = require('react'),
    PageLayout = React.createFactory(require('./src/app/components/PageLayout'));

module.exports = {
    index: function(request, response) {
        // Render React to a string
        var pageMarkup = React.renderToString(PageLayout());
        // Render swig template
        response.render('index', {
            markup: pageMarkup
        });
    }
};
