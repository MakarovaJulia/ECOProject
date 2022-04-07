import {useStores} from "../../utils/use-stores-hook";
import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {authPartnersValidationSchema} from "../../utils/validationSchemas";
import styles from '../styles.module.scss';
import classNames from "classnames/bind";
import {useNavigate} from "react-router";

const cx = classNames.bind(styles);

export const AuthPartnersForm = () => {
    let navigate = useNavigate()

    const  {authStore: {login, isError}, modalStore: {clearCurrentModal}} = useStores();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: authPartnersValidationSchema,
        onSubmit: values => {
            login({
                login: values.email,
                password: values.password
            })
            if (!isError){
                clearCurrentModal()
                navigate('/profile')
            }
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                className={cx({
                    input: true,
                    inputError: formik.touched.email && formik.errors.email
                })}
                id='email'
                type='text'
                placeholder='Email'
                {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
                <div className={styles.errorMessage}>{formik.errors.email}</div>
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
