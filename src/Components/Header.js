import React, { Component } from 'react';
import './Header.css';
import Background from './img/images.jpg';


const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '50vh',
    backgroundSize: 'cover'
};
class Header extends Component {

    render() {
        return (
            <header style={myStyles}>
                <h1>{this.props.text}</h1>
                <p>This is the Project on  the React firstapp</p>
                <a href="#button">{this.props.button}</a>
            </header>
        );
    }

}
export default Header;