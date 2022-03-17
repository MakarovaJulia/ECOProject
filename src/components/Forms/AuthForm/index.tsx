import {useStores} from "../../utils/use-stores-hook";
import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {authValidationSchema} from "../../utils/validationSchemas";
import styles from '../styles.module.scss';
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const AuthForm = () => {

    const  {authStore: {login}} = useStores();

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: ''
        },
        validationSchema: authValidationSchema,
        onSubmit: values => {
            login({
                loginValue: values.phone,
                passwordValue: values.password
            })
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                className={cx({
                    input: true,
                    inputError: formik.touched.phone && formik.errors.phone
                })}
                id='phone'
                type='tel'
                placeholder='Телефон'
                {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
                <div className={styles.errorMessage}>{formik.errors.phone}</div>
            ) : null}
            <input
                className={cx({
                    input: true,
                    inputError: formik.touched.password && formik.errors.password
                })}
                id='password'
                type='password'
                placeholder='Пароль'
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div className={styles.errorMessage}>{formik.errors.password}</div>
            ) : null}
            <Button
                color
                title='Войти'
                type='submit'
            />
        </form>
    )
}
