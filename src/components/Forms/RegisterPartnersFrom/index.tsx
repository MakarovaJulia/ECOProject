import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {regPartnersValidationSchema} from "../../utils/validationSchemas";
import styles from "../styles.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const RegisterPartnersForm = (props: { onClick: () => void }) => {

    const {onClick} = props;

    const formik = useFormik({
        initialValues: {
            org: '',
            email: '',
            password: ''
        },
        validationSchema: regPartnersValidationSchema,
        onSubmit: values => {
            onClick();
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                className={cx({
                    input: true,
                    inputError: formik.touched.org && formik.errors.org
                })}
                id='org'
                type='text'
                placeholder='Наименование организации'
                {...formik.getFieldProps('org')}
            />
            {formik.touched.org && formik.errors.org ? (
                <div className={styles.errorMessage}>{formik.errors.org}</div>
            ) : null}
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
                title='Получить код'
                type='submit'
            />
        </form>
    )
}
