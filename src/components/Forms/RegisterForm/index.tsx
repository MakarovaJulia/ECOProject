import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {regValidationSchema} from "../../utils/validationSchemas";
import styles from "../styles.module.scss";
import {observer} from "mobx-react";
import {useStores} from "../../utils/use-stores-hook";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

export const RegisterForm = observer((props: { onClick: () => void }) => {

    const {onClick} = props;

    const {authStore: {setPhone}} = useStores();

    const formik = useFormik({
        initialValues: {
            phone: ''
        },
        validationSchema: regValidationSchema,
        onSubmit: values => {
            setPhone(values.phone);
            onClick();
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
            <Button
                title='Получить код'
                color
                type='submit'
            />
        </form>
    )
})
