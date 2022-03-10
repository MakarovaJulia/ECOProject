import React, {FC, ReactNode, useRef, useEffect, useCallback} from 'react';
import styles from './index.module.scss'
import {useStores} from "../../utils/use-stores-hook";

interface Props {
    title: ReactNode;
    onClose: () => void;
}

export const Modal: FC<Props> = ({title, onClose, children}) => {
    const {modalStore: {clearCurrentModal}} = useStores()
    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const closeModal = (e:any) => {
      if(modalRef.current === e.target){
          clearCurrentModal()
      }
    }

    return (
        <div className={styles.overlay} ref={modalRef} onClick={closeModal}>
            <div className={styles.modal_window}>
                {title}
                <button onClick={onClose}>X</button>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}