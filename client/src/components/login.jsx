import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import {open} from '../actions'
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as reducers from '../reducers/index.js'
import { Dispatch } from "redux";


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.openLoginModal = this.openLoginModal.bind(this)
        this.closeLoginModal = this.closeLoginModal.bind(this)
        this.submitLogin = this.submitLogin.bind(this)
    }


    openLoginModal() {
       this.props.actions.openLoginModal()  //sets login modal state to true
    }
    closeLoginModal() {
        this.props.actions.closeLoginModal() //sets login modal state to false
    }

   
    submitLogin() {
        let username = $('#loginUsernameInput').val()
        let password = $('#loginPasswordInput').val()
        this.props.actions.closeLoginModal()
        this.props.submitLogin(username, password)
    }

    

    render() {
        const actions = [
            <FlatButton label="Cancel" onClick={this.closeLoginModal}/>, //modal buttons
            <FlatButton label="Login" onClick={this.submitLogin}/>
        ]

        return( <div>
                    <RaisedButton onClick={this.openLoginModal} label='login'/>
                    <Dialog 
                        actions={actions} 
                        open={this.props.store.loginModalStatus} //modal state is false
                        onRequestClose={this.closeLoginModal}> 
                        <TextField
                            id="loginUsernameInput" 
                            placeholder="username"
                        />
                        <TextField
                            id="loginPasswordInput" 
                            placeholder="password"
                        /> 
                    </Dialog>
                </div>)
    }
}

// ]\
const mapStateToProps = state => (
    { store: state } // eslint-disable-line
  );
  
  const mapDispatchToProps = dispatch => (
    { actions: bindActionCreators(actions, dispatch) }
  );

  export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default Login