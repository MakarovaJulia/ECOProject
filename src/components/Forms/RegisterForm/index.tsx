import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {authValidationSchema, regValidationSchema} from "../../utils/validationSchemas";
import styles from "../styles.module.scss";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import classNames from "classnames/bind";
import axios from "axios";
import {useNavigate} from "react-router";

const cx = classNames.bind(styles);

export const RegisterForm = observer((props: { onClick: () => void }) => {

    let navigate = useNavigate()

    const {authStore: {signup, isError}, modalStore:{clearCurrentModal}} = useStores();

    const {onClick} = props;


    const formik = useFormik({
        initialValues: {
            phone: '',
            password: ''
        },
        validationSchema: authValidationSchema,
        onSubmit: values => {
            signup({
                phone_number: values.phone,
                password: values.password
            });
            if (!isError) {
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
                title='Получить код'
                color
                type='submit'
            />
        </form>
    )
})
