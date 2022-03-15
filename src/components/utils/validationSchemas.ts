import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const authValidationSchema = Yup.object({
    phone: Yup.string()
        .matches(phoneRegExp, 'Неверный номер телефона')
        .required('Введите номер телефона'),
    password: Yup.string()
        .min(8, 'Длина пароля не может быть меньше 8 символов')
        .max(20, 'Длина пароля не может превышать 20 символов')
        .required('Введите пароль')
});

export const regValidationSchema = Yup.object({
    phone: Yup.string()
        .matches(phoneRegExp, 'Неверный номер телефона')
        .required('Введите номер телефона')
});

export const codeValidationSchema = Yup.object({
    phone: Yup.number()
        .min(4, 'Длина кода - 4 символа')
        .max(4, 'Длина кода - 4 символа')
        .required('Введите код, отправленный на телефон')
});
