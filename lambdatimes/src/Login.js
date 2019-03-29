import React from 'react';
import styled, { css } from 'styled-components';

import App from './App';

const LoginContainerDiv = styled.div`
    width: 50%;
    margin: auto;
    background-color: #F1F1F1;
    margin-top: 200px;
    text-align: center;
`

const FormTag = styled.form`
    display: flex;
    flex-direction: column;
    width: 250px;
    margin: auto;
`

const InputTag = styled.input`
    margin-bottom: 20px;
    height: 30px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 3px;
    box-shadow: 7px 7px 5px grey;
    text-align: center;

    ::placeholder {
        color: gray;
    }
`

const ButtonTag = styled.button`
    width: 100px;
    height: 30px;
    background-color: black;
    border: none;
    border-radius: 3px;
    color: white;
    margin: auto;
    box-shadow: 7px 7px 5px grey;

`

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            status: false,
            username: '',
            password: ''
        }
    }

    enterUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    enterPassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    checkCredentials = (event) => {
        event.preventDefault()
        if(this.state.username == 'anubhav' && this.state.password == '1234') {
            this.setState({
                status: true
            })
        } else {
            this.setState({
                status: false
            })
        }
    }

    loginPage = () => {
        return(
            <LoginContainerDiv>
                <h1>LogIn</h1>
                <FormTag>
                    <InputTag onChange={this.enterUsername} placeholder="anubhav"/>
                    <InputTag onChange={this.enterPassword} placeholder="1234"/>
                    <ButtonTag onClick={this.checkCredentials}>Submit</ButtonTag>
                </FormTag>
            </LoginContainerDiv>
        )
    }

    authenticationChecker = () => {
        if(this.state.status) {
            return <App/>
        } else {
            return this.loginPage()
        }
    }

    render() {
        return (
            this.authenticationChecker()
        )
    }
}

export default Login;