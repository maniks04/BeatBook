import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import RaisedButton from 'material-ui/RaisedButton';


class Artist extends React.Component {
    constructor(props) {
        super(props) 
    }

componentDidMount() {
    console.log('mounted Artist')
    console.log(this.props.history)
}



logout() {
    this.props.history.replace('/')
    
}


    render() {
        return(<div>
            Artist Page
            <RaisedButton onClick={() => this.logout()} label='logout'/>
            </div>)
    }
}

export default Artist