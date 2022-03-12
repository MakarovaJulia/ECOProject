import {Input} from "../../ui/Input";
import {useState} from "react";
import {Button} from "../../ui/Button";

export const CodeVerificationForm = () => {
    const [code, setCode] = useState<string>('');

    const handleSubmit = () => {

    }

    const handleInputChange = (event: {target: {value: string}; }) => {
        const value = event.target.value;

        if (value !== code) {
            setCode(value)
        }
    }

    return (
        <form>
            <Input
                value={code}
                placeholder='Код'
                type='text'
                onChange={handleInputChange}
            />
            <Button
                title='Отправить'
                color
                onClick={handleSubmit}
            />
        </form>
    )
}
