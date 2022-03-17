import {Button} from "../../ui/Button";
import styles from "../styles.module.scss";
import {useFormik} from "formik";
import {codeValidationSchema} from "../../utils/validationSchemas";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

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
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                className={cx({
                    input: true,
                    inputError: formik.touched.code && formik.errors.code
                })}
                id='code'
                type='text'
                placeholder='Код'
                {...formik.getFieldProps('code')}
            />
            {formik.touched.code && formik.errors.code ? (
                <div className={styles.errorMessage}>{formik.errors.code}</div>
            ) : null}
            <Button
                title='Отправить'
                color
                type='submit'
            />
        </form>
    )
}
