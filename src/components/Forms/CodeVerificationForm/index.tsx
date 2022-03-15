import {Button} from "../../ui/Button";
import styles from "./index.module.scss";
import {useFormik} from "formik";
import {codeValidationSchema} from "../../utils/validationSchemas";

export const CodeVerificationForm = () => {

    const formik = useFormik({
        initialValues: {
            code: ''
        },
        validationSchema: codeValidationSchema,
        onSubmit: values => {
            alert('Submit')
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <input
                className={styles.input}
                id='code'
                type='text'
                placeholder='Код'
                {...formik.getFieldProps('code')}
            />
            <Button
                title='Отправить'
                color
                type='submit'
            />
        </form>
    )
}
