var React = require('react'),
    Header = require('./Header'),
    Survey = require('./Survey'),
    Points = require('./Points'),
    Footer = require('./Footer');

module.exports = PageLayout = React.createClass({
    getInitialState: function() {
        return {
            totalPoints: 0,
            data: '',
            url: 'https://nutritionix-api.p.mashape.com/v1_1/search/falafel',
            pointsIncrement: 50
        };
    },
    // After component rendered
    componentDidMount: function() {
        // Initialize Socket.io
        var socket = io.connect('http://localhost:8080');
        socket.on('connect', function(data) {
            socket.emit('join', 'One joined...');
        });
        // Set local storage values
        if (!localStorage.getItem('totalPoints')) { 
            localStorage.setItem('totalPoints', 0);
        }
        this.setState({
            totalPoints: localStorage.getItem('totalPoints')
        });
        this.getNewProducts();
    },
    getNewProducts: function() {
        // making request to the Nutritionix API on MashApe
        var that = this,
            requestUrl = this.state.url + '?results=1:10&fields=item_name,item_id,brand_name,nf_calories',
            newXHR = new XMLHttpRequest();

        newXHR.open('GET', requestUrl, true);
        newXHR.setRequestHeader('X-Mashape-Key', 'XG02pfmpLEmshzIMjeZCtHuRhvg1p1e8MTyjsnjY2qPSARip3R');
        newXHR.send();
        newXHR.onreadystatechange = function() {
            // If request is successfully made 
            if (newXHR.readyState == 4 && newXHR.status == 200) {
                that.setState({
                    data: JSON.parse(newXHR.responseText)
                });
            } else {
                // there should be an error handler   
                // console.log(newXHR.status);             
            }
        }
    },
    handleOnCardClick: function(){
        localStorage.setItem('totalPoints', Number(localStorage.getItem('totalPoints')) + this.state.pointsIncrement);
        this.setState({
            totalPoints: localStorage.getItem('totalPoints')
        });
        this.getNewProducts();
    },
    render: function() {
        return ( 
            <div>
                <Header totalPoints={this.state.totalPoints} />
                <div className="b_surveys_pageLayout">              
                    <Survey data={this.state.data} onCardClick={this.handleOnCardClick} />
                    <Footer />
                </div>
            </div>
        	
        );
    }
});
