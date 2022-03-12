import { ModalStore } from './modalStore'
import AuthStore from "./authStore";

export class MainStore{
    modalStore: ModalStore;
    authStore: AuthStore;

    constructor() {
        this.modalStore = new ModalStore(this);
        this.authStore = new AuthStore(this);
    }
}

const mainStore = new MainStore();

export default mainStore