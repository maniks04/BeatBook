import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index.js';
import {open} from '../actions'
import { bindActionCreators } from 'redux';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import NormalLoginForm from './loginform.jsx'

const WrappedNormalLoginForm = Form.create()(NormalLoginForm); //component for antd loginform

class Login2 extends React.Component {
    constructor(props) {
        super(props)
    }







    render() {
        const styles = {
            logo: {
                //float: 'right',
                height: 20,
                width: 20,
                display: 'inline-block'

            },
            beatbook: {
                fontSize: 20,
                fontFamily: 'system-ui',
                marginTop: '5%',
                display: 'inline-block'
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
                marginLeft: 50,
                marginRight: 50
                 //marginTop: '25%',

            },
            divider: {
                borderStyle: 'solid',
                borderWidth: .5,
                borderColor: '#e6e6e6', 
                marginLeft: 25,
                marginRight: 25,
                marginTop: 50,
                marginBottom: 50
            }
        }

        //possible logo choices
        //var a = 'https://png.icons8.com/windows/1600/headphones.png'
        //var a = 'https://openclipart.org/image/2400px/svg_to_png/285116/Stylized-Headphones-Icon.png'
        var a = 'https://cdn3.iconfinder.com/data/icons/business-vol-2/72/57-512.png'
        //var a = 'http://pngimages.net/sites/default/files/headset-png-image-16316.png'
        //var a = 'http://files.idg.co.kr/itworld/image/avatar/article/2015/March/sookyung_lee@idg.co.kr/%20%EB%B0%80%ED%81%AC.png'
        //var a = https://cdn2.iconfinder.com/data/icons/advertising-and-media-1-1/512/45-512.png
        return(
            <div style={styles.loginbox}>
                      <img src={a} style={styles.logo}></img>
                      <div style={styles.beatbook}>beatbook</div>
                      <div style={styles.divider}></div>
                      <div style={styles.loginform}>
                        <WrappedNormalLoginForm submitLogin={this.props.submitLogin}/> 
                      </div>
                      <div className="fb-login-button" data-size="medium" data-auto-logout-link="true">login</div>
                    </div >
        )
    }
}


const mapStateToProps = state => (
    { store: state } // eslint-disable-line
  );
  
  const mapDispatchToProps = dispatch => (
    { actions: bindActionCreators(actions, dispatch) }
  );

export default connect(mapStateToProps, mapDispatchToProps)(Login2);
