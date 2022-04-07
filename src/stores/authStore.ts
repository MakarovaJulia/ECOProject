import {MainStore} from "./mainStore";
import {makeObservable, observable, action, computed} from "mobx";
import axios from "axios";

interface userProps{
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
            balance: 0
        }
        makeObservable(this,{
            isLoading: observable,
            isError: observable,
            phone: observable,
            login: action,
            signup: action,
            logout: action,
            isAuthorized: computed,
            user: observable,
            getUserInfo: action,
            setPhone: action,
            clearPhone: action
        })

        this.isLoading = false;
        this.isError = false;
        this.phone = '';
    }


    get isAuthorized() {
        return localStorage.getItem("token")!== null && localStorage.getItem("token")!==''
    }

    login = (accountData: {login: string, password: string}) => {
        this.isLoading = true;
        this.isError = false;
        axios.post("login", accountData)
            .then((res) => {
                this.isLoading = false;
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data))
            })
            .catch((err) => {
                this.isLoading = false;
                this.isError = true;
                console.log(err);
            })
    }

    signup = (accountData: {phone_number: string, password: string}) => {
        this.isError = false;
        axios.post("account", accountData)
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data))
            })
            .catch((err) => {
                this.isError = true;
                console.log(err);
            })
    }

    logout = () => {
        console.log('logout');
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.isError = false;
    };

    setPhone = (newPhone: string) => {
        this.phone = newPhone;
    }

    clearPhone = () => {
        this.phone = '';
    }

    getUserInfo = () => {
        return this.user;
    }
}
