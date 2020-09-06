// import Axios from "axios";

//靜態變數-授權狀態
const  IS_AUTH_LOGIN_STR = 'isAuthLogin';
//靜態變數-Token
const TOKEN_STR = 'token';
//靜態變數-使用者資訊-姓名
const USER_NAME_PROFILE_STR = 'username';

export default {
    state:{
        //授權狀態
        authenticated: sessionStorage.getItem(IS_AUTH_LOGIN_STR) || true,
        //Auth Token
        jwt: sessionStorage.getItem(TOKEN_STR) || '',
        //使用者名稱
        username: sessionStorage.getItem(USER_NAME_PROFILE_STR) || '',
    },
    getters:{},
    mutations: {},
    actions: {}
}
