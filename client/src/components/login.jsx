import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';



class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password:'',
            open: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.open = this.open.bind(this)
        this.close = this.close.bind(this)
        this.click = this.click.bind(this)
    }

    open() {
        this.setState({open:true})
    }

    close() {
        this.setState({open:false})
    }

    handleChange(e) {
       this.setState({password:e.target.value})
    }

    click(e) {
        this.props.click(this.state.password)
    }



    render() {
        const actions = [
            <FlatButton label="cancel" onClick={this.close}/>,
            <FlatButton label="submit" onClick={this.click}/>
        ]

        return( <div>
                    <RaisedButton onClick={this.open} label='login'/>
                    <Dialog 
                        actions={actions} 
                        open={this.state.open} 
                        onRequestClose={this.close}>
                        <TextField
                            id="passwordInput" 
                            onChange={(e) => this.handleChange(e)}/> 
                    </Dialog>
                </div>)
    }
}

export default Login