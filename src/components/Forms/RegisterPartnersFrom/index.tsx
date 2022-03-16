import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {regPartnersValidationSchema} from "../../utils/validationSchemas";
import styles from "../styles.module.scss";

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
                className={styles.input}
                id='org'
                type='text'
                placeholder='Наименование организации'
                {...formik.getFieldProps('org')}
            />
            {formik.touched.org && formik.errors.org ? (
                <div>{formik.errors.org}</div>
            ) : null}
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
                title='Получить код'
                type='submit'
            />
        </form>
    )
}
