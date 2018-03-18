import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import Login from './login.jsx'
import * as reducers from '../reducers/index.js'
import Calendar from '../actions/calendar.js'
import TextField from 'material-ui/TextField';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import NormalLoginForm from './loginform.jsx'

const WrappedNormalLoginForm = Form.create()(NormalLoginForm); //component for antd loginform


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.submitLogin = this.submitLogin.bind(this)
    }

    


    componentDidMount() {
        console.log('mounted homepage')
    }

    submitLogin(username, password) {
        axios.post('/password', {
            username: username,
            password: password
        }).then(res => {
            if (res.data === 'artist') {
                this.props.history.replace('/artist')
            } if (res.data === 'venue') {
                this.props.history.replace('/venue')
            } else {
                console.log('incorrect password')
            }
        }).catch(err => {
            console.log(err)
        })   
    }

    


    render() {
     
        const styles = {
            logo: {
                float: 'left',
                height: 25,
                width: 25
            },
            beatbook: {
                fontSize: 20,
                fontFamily: 'system-ui'
            },
            loginbutton: {
                textAlign: 'center'
            },
            loginbox: {
                backgroundColor: 'white',
                position: 'absolute',
                borderStyle: 'solid',
                borderWidth: .5,
                borderColor: '#e6e6e6',
                width: window.innerWidth/4,
                height: window.innerHeight*.75,
                left: window.innerWidth*3/8,
                top: window.innerHeight*1/8,
                textAlign: 'center'
            },
            loginform: {
                margin: 50,
                 marginTop: '25%',

            }
        }
        //possible logo choices
        //http://files.idg.co.kr/itworld/image/avatar/article/2015/March/sookyung_lee@idg.co.kr/%20%EB%B0%80%ED%81%AC.png
        //https://cdn2.iconfinder.com/data/icons/advertising-and-media-1-1/512/45-512.png
        return( <div>
                  <div>
                    {/* <img style={styles.logo} src=""></img> */}  
                    {/* <div style={styles.beatbook}>beatbook</div> */}
                  </div>
                    {/* <div style={styles.loginbutton}>
                    <Login submitLogin={this.submitLogin}/>         //login button & modal
                    </div> */}
                    <div style={styles.loginbox}>
                      <div style={styles.beatbook}>beatbook</div>
                      <div style={styles.loginform}>
                        < WrappedNormalLoginForm submitLogin={this.submitLogin}/> 
                      </div>
                    </div >
                    
                </div>)
    }
}


const mapStateToProps = state => (
    { store: state } // eslint-disable-line
  );
  
  const mapDispatchToProps = dispatch => (
    { actions: bindActionCreators(actions, dispatch) }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
