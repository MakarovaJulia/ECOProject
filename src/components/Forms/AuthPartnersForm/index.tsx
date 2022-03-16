import {useStores} from "../../utils/use-stores-hook";
import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {authPartnersValidationSchema} from "../../utils/validationSchemas";
import styles from '../styles.module.scss';

export const AuthPartnersForm = () => {

    const  {authStore: {login}} = useStores();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: authPartnersValidationSchema,
        onSubmit: values => {
            login({
                loginValue: values.email,
                passwordValue: values.password
            })
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                className={styles.input}
                id='email'
                type='text'
                placeholder='Email'
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}
            <input
                className={styles.input}
                id='password'
                type='password'
                placeholder='Пароль'
                {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}
            <Button
                color
                title='Войти'
                type='submit'
            />
        </form>
    )
}
