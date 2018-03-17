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
// import music from './music.png'

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
                height: 25,
                width: 25
            },
            beatbook: {
                fontSize: 20,
                float: 'left',
                fontFamily: 'system-ui'
            },
            login: {
                textAlign: 'center'
            }
        }

        return( <div>
                    <div>
                    <div style={styles.beatbook}>beatbook</div>
                    <img style={styles.logo} src="http://files.idg.co.kr/itworld/image/avatar/article/2015/March/sookyung_lee@idg.co.kr/%20%EB%B0%80%ED%81%AC.png"></img>
                    </div>
                    <div style={styles.login}>
                    <Login submitLogin={this.submitLogin}/>
                    </div>
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
