import {MainStore} from "./mainStore";
import {makeObservable, observable, action, computed} from "mobx";
import {loginRequest} from "../utils/loginRequiest";
import axios from "axios";

const urlLogin = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/login"

const urlSignup = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/account"

interface userProps{
    token: string,
    id?: string,
    photo_url?: string,
    firstname?: string,
    lastname?: string,
    username: string,
    email: string,
    phone_number?: string,
    balance? : number
    role?: object,
}

export default class AuthStore {
    user: userProps;
    isLoading: boolean;
    isError: boolean;
    phone: string;

    constructor(public mainStore: MainStore) {
        this.user = {
            username: '',
            phone_number: '',
            email: '',
            token: '',
            balance: 0
        }
        makeObservable(this,{
            //token: observable,
            isLoading: observable,
            isError: observable,
            phone: observable,
            login: action,
            signup: action,
            logout: action,
            //setPhone: action,
            //clearPhone: action,
            isAuthorized: computed,
            user: observable,
            getUserToken: action,
            getUserInfo: action
        })

       // this.token = '';
        this.isLoading = false;
        this.isError = false;
        this.phone = '';
    }


    get isAuthorized() {
        return this.user.token !== '' && this.user.token !== null;
    }

    login = (accountData: {login: string, password: string}) => {
        this.isLoading = true;
        this.isError = false;
        axios.post(urlLogin, accountData)
            .then((res) => {
                this.isLoading = false;
                this.user.token = res.data.token;
            })
            .catch((err) => {
                this.isLoading = false;
                this.isError = true;
                console.log(err);
            })
    }

    signup = (accountData: {phone_number: string, password: string}) => {
        this.isError = false;
        axios.post(urlSignup, accountData)
            .then((res) => {
                this.user.token = res.data.token;
            })
            .catch((err) => {
                this.isError = true;
                console.log(err);
            })
    }

    logout = () => {
        console.log('logout');
        this.user.token = '';
        this.isError = false;
    };

    setPhone = (newPhone: string) => {
        this.phone = newPhone;
    }

    clearPhone = () => {
        this.phone = '';
    }

    getUserToken = () => {
        return this.user.token;
    }

    getUserInfo = () => {
        return this.user;
    }
}
