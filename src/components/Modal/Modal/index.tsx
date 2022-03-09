import React, {FC, ReactNode} from 'react';
import styles from './index.module.scss'

interface Props {
    title: ReactNode;
    onClose: () => void;
}

export const Modal: FC<Props> = ({title, onClose, children}) => {
    return (
        <div className={styles.overlay}>
            <div>
                {title}
                <button onClick={onClose}>X</button>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}