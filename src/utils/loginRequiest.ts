import {accountData} from "../mocks/userMock";

export const loginRequest = (address: string, data: {loginValue: string, passwordValue: string}) => {
    return new Promise<{ token: string }>((resolve, reject) => {
        if (
            accountData.loginValue === data.loginValue
            && accountData.password === data.passwordValue
        ){
            setTimeout(() => resolve({token: 'token1234'}), 1000);
        } else {
            setTimeout(() => reject(new Error('Incorrect login or password')), 1000);
        }
    });
}
