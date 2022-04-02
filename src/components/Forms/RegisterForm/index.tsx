import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {authValidationSchema, regValidationSchema} from "../../utils/validationSchemas";
import styles from "../styles.module.scss";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import classNames from "classnames/bind";
import axios from "axios";

const cx = classNames.bind(styles);

export const RegisterForm = observer((props: { onClick: () => void }) => {
    const url = "https://ecoapp.cloud.technokratos.com/eco-rus/api/v1/account"

    const {authStore: {setPhone, phone}} = useStores();

    const {onClick} = props;

    const submit = (accountData: {phone_number: string, password: string}) => {
        axios.post(url, accountData)
            .then((res) => {
                alert('You entered successfully')
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const formik = useFormik({
        initialValues: {
            phone: '',
            password: ''
        },
        validationSchema: authValidationSchema,
        onSubmit: values => {
            submit({
                phone_number: values.phone,
                password: values.password
            });
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
