import {Input} from "../../ui/Input";
import {useStores} from "../../utils/use-stores-hook";
import {useState} from "react";
import {Button} from "../../ui/Button";

export const AuthForm = () => {
    const  {authStore: {
        login,
        logout,
        isError
    }} = useStores();

    const [loginValue, setLogin] = useState<string>('');
    const [passwordValue, setPassword] = useState<string>('');

    function handleSubmit(event: { preventDefault: () => void; }) {
        alert('The form was submitted!');
        login({loginValue: loginValue, passwordValue: passwordValue});
        event.preventDefault();
    }

    const handleInputChange = (event: { target: {value: string, name: string}; }) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        if (name === 'login') {
            setLogin(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }

        if (isError) {
            logout();
        }
    }

    return (
        <form>
            <Input
                name='login'
                value={loginValue}
                onChange={handleInputChange}
                error={isError}
                type='tel'
                placeholder='Телефон'
            />
            <Input
                name='password'
                type='password'
                placeholder='Пароль'
                value={passwordValue}
                onChange={handleInputChange}
                error={isError}
            />
            <Button
                onClick={handleSubmit}
                color
                title='Войти'
            />
        </form>
    )
}
