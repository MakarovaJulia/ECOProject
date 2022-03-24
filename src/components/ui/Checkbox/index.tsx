import styles from './index.module.scss';
import {FC} from "react";
import {ICheckbox} from "./index.interfaces";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);


export const Checkbox: FC<ICheckbox> = (props: ICheckbox) => {
    const {index, title, isChecked, handleCheck, className} = props

    return (
        <div className={cx(styles.checkboxWrapper, className)}>
            <input type="checkbox"
                   onChange={handleCheck}
                   checked={isChecked}
                   id={`checkbox-${index}`}
                   className={styles.checkbox}
            />
            <label className={styles.checkboxTitle}
                   htmlFor="checkbox" onClick={handleCheck}>{title}</label>
        </div>
    )
}