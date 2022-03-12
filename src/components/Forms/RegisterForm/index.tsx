import {Input} from "../../ui/Input";
import {Button} from "../../ui/Button";
import {useState} from "react";

export const RegisterForm = (props: { onClick: () => void }) => {

    const {onClick} = props;

    const [phone, setPhone] = useState<string>('')

    const handleInputChange = (event: {target: {value: string}; }) => {
        const value = event.target.value;

        if (value !== phone) {
            setPhone(value)
        }
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        onClick();
        event.preventDefault();
    }

    return (
        <form>
            <Input
                type='tel'
                placeholder='Телефон'
                value={phone}
                onChange={handleInputChange}
            />
            <Button
                title='Получить код'
                color
                onClick={handleSubmit}
            />
        </form>
    )
}
