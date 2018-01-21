import React, { Component } from 'react';
import { Icon } from './Icon';

const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    color: 'blueviolet'
}

const Heading = (props) => {
    return  <h1>
        Hello {props.framework} 📦 🚀
    </h1>;
}

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return (
            <div style={appStyle}>
                <Icon name="ei-eye" size="l" />
                <Heading {...this.props}/>
            </div>
        );
    }
}