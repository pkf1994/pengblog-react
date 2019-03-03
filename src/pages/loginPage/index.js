import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import {InputEX,Button} from '../../common'
import {LoginPageWrapper,
        ThemeJumbotron,
        Loginer,
        InputWrapper,
        ThemeImage,
        Gap,
        LogoWrapper,
        ButtonWrapper,
        Loading} from './style'

import {createAppointLoginPageInputValueAction,
        createTriggerIsLoggingInAction,
        createLoginAction} from './store'

import Logo from "../homeEx/components/themeJumbotron/components/logo";
import {createPushPrograssToEndAction} from "../home/store";
import themeImage from "../../static/image/fangao.jpg";
import {SLIDE_UP_FAST} from "../../commonStyle/commonClassNameConstant";
import {PASSWORD, USERNAME} from "./constant";
import loadingSpin from "../../common/loading/svg/loading-spin.svg";
import {createAppointNoticeContent, createTriggerAlreadyLoggedInAction} from "../../store/actionCreators";
import {put} from "redux-saga/effects";

class LoginPage extends PureComponent {



    render() {

        const { browser,
                isMobile,
                heightOfBrowser,
                appointLoginPageInputValue,
                username,
                password,
                tryToLogin,
                isLogging,
                alreadyLoggedIn,
                tryToLogout} = this.props


        return (
           <LoginPageWrapper heightOfBrowser={heightOfBrowser}>

               <ThemeJumbotron className={SLIDE_UP_FAST}>

                   <ThemeImage src={themeImage}/>


                   <LogoWrapper>
                       <Logo scale={1}/>
                   </LogoWrapper>


               </ThemeJumbotron>

               <Gap/>

               <Loginer>

                   <InputWrapper>
                       <InputEX value={username}
                                placeholder="用户名"
                                disabled={isLogging || alreadyLoggedIn}
                                onChange={(e) => {appointLoginPageInputValue(USERNAME,e)}}/>
                   </InputWrapper>

                   <InputWrapper>
                       <InputEX value={password}
                                placeholder="密码"
                                type="password"
                                disabled={isLogging || alreadyLoggedIn}
                                onChange={(e) => {appointLoginPageInputValue(PASSWORD,e)}}/>
                   </InputWrapper>

                   <ButtonWrapper>
                       {
                           alreadyLoggedIn ?
                               <Button onClick={() => {!isLogging && tryToLogout()}}
                                       disabled={isLogging}>
                                   &nbsp;&nbsp;登出&nbsp;&nbsp;
                               </Button>
                               :
                               (
                                   isLogging ?
                                       <Loading src={loadingSpin}/>
                                       :
                                       <Button onClick={() => {!isLogging && tryToLogin(username,password)}}
                                               disabled={isLogging}>
                                           &nbsp;&nbsp;登录&nbsp;&nbsp;
                                       </Button>
                               )
                       }
                   </ButtonWrapper>
               </Loginer>

           </LoginPageWrapper>
        )
    }

    componentDidMount() {
        this.props.pushPrograssBarToEnd()
    }

    componentWillUnmount() {
    }

}

const mapState = (state) => ({
        browser: state.get('rootState').get('browser'),
        isMobile: state.get('rootState').get('isMobile'),
        heightOfBrowser: state.get('rootState').get('heightOfBrowser'),
        username: state.get('loginPage').get('username'),
        password: state.get('loginPage').get('password'),
        isLogging: state.get('loginPage').get('isLogging'),
        alreadyLoggedIn: state.get('loginPage').get('alreadyLoggedIn')
    })

const mapActions = (dispatch) => {
    return {
        appointLoginPageInputValue(inputId,e){
            const value = {
                inputId: inputId,
                inputValue: e.target.value
            }
            const action = createAppointLoginPageInputValueAction(value)
            dispatch(action)
        },
        pushPrograssBarToEnd() {
            const pushPrograssBarToEndAction = createPushPrograssToEndAction({page: 'home'})
            dispatch(pushPrograssBarToEndAction)
        },
        tryToLogin(username,password){
            const triggerIsLoggingInAction = createTriggerIsLoggingInAction(true)
            dispatch(triggerIsLoggingInAction)

            const loginValue = {
                username: username,
                password: password
            }

            const loginAction = createLoginAction(loginValue)
            dispatch(loginAction)
        },
        tryToLogout(){
            const triggerIsLoggingInAction = createTriggerIsLoggingInAction(true)
            dispatch(triggerIsLoggingInAction)

            localStorage.removeItem('token')

            const triggerAlreadyLoggedInAction = createTriggerAlreadyLoggedInAction(false)
            dispatch(triggerAlreadyLoggedInAction)

            const triggerIsLoggingInAction2 = createTriggerIsLoggingInAction(false)
            dispatch(triggerIsLoggingInAction2)

            const appointNoticeContent = createAppointNoticeContent('登出成功')
            dispatch(appointNoticeContent)
        }
    }
}

export default connect(mapState, mapActions)(withRouter(LoginPage))