import styles from './index.module.scss';
import {FC} from "react";
import {ICheckbox} from "./index.interfaces";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


export const Checkbox: FC<ICheckbox> = (props: ICheckbox) => {
    const {index, title, isChecked, onChange, className} = props

    return (
        <div className={cx(styles.checkboxWrapper, className)}>
            <input type="checkbox"
                   onChange={onChange}
                   checked={isChecked}
                   id={`checkbox-${index}`}
                   className={styles.checkbox}
            />
            <label className={styles.checkboxTitle}
                   htmlFor="checkbox" onClick={onChange}>{title}</label>
        </div>
    )
}