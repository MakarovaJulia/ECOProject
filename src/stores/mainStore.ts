import { ModalStore } from './modalStore'
import AuthStore from "./authStore";
import MarketStore from "./marketStore";

export class MainStore{
    modalStore: ModalStore;
    authStore: AuthStore;
    marketStore: MarketStore;

    constructor() {
        this.modalStore = new ModalStore(this);
        this.authStore = new AuthStore(this);
        this.marketStore = new MarketStore(this);
    }
}

const mainStore = new MainStore();

export default mainStore