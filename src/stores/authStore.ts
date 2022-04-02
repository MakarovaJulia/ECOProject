import {MainStore} from "./mainStore";
import {makeObservable, observable, action, computed} from "mobx";
import {loginRequest} from "../utils/loginRequiest";
import axios from "axios";

const url = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/login"

export default class AuthStore {
    token: string;
    isLoading: boolean;
    isError: boolean;
    phone: string;

    constructor(public mainStore: MainStore) {
        makeObservable(this,{
            token: observable,
            isLoading: observable,
            isError: observable,
            phone: observable,
            login: action,
            logout: action,
            setPhone: action,
            clearPhone: action,
            isAuthorized: computed
        })

        this.token = '';
        this.isLoading = false;
        this.isError = false;
        this.phone = '';
    }


    get isAuthorized() {
        return this.token !== '' && this.token !== null;
    }

    login = (accountData: {login: string, password: string}) => {
        this.isLoading = true;
        this.isError = false;
        axios.post(url, accountData)
            .then((res) => {
                this.isLoading = false;
                this.token = res.data.token;
                alert('You entered successfully')
            })
            .catch((err) => {
                this.isLoading = false;
                this.isError = true;
                console.log(err);
            })
    }

    logout = () => {
        console.log('logout');
        this.token = '';
        this.isError = false;
    };

    setPhone = (newPhone: string) => {
        this.phone = newPhone;
    }

    clearPhone = () => {
        this.phone = '';
    }
}
