import {Button} from "../../ui/Button";
import {useFormik} from "formik";
import {regValidationSchema} from "../../utils/validationSchemas";
import styles from "../styles.module.scss";

export const RegisterForm = (props: { onClick: () => void }) => {

    const {onClick} = props;

    const formik = useFormik({
        initialValues: {
            phone: ''
        },
        validationSchema: regValidationSchema,
        onSubmit: values => {
            onClick();
        },
    })

    return (
        <form onSubmit={formik.handleSubmit} className={styles.form}>
            <input
                className={styles.input}
                id='phone'
                type='tel'
                placeholder='Телефон'
                {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
                <div>{formik.errors.phone}</div>
            ) : null}
            <Button
                title='Получить код'
                color
                type='submit'
            />
        </form>
    )
}
