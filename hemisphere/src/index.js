/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';
import HemisphereDisply from './HemisphereDisplay'


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    // initialize state outside of constructor
    state = {latitude:null,longitude:null,errorMessage:''}

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            },
            (error) => {
                this.setState({errorMessage: error.message})
            }
        );
    }
    

    render() {
        if(this.state.errorMessage && !this.state.latitude) {
            return(<div>{this.state.errorMessage}</div>)
        }
        if(!this.state.errorMessage && this.state.latitude) {
            return (
                <HemisphereDisply latitude={this.state.latitude} />
            )
        }
        else {
            return(<div>Loading...</div>)
        }
        
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)