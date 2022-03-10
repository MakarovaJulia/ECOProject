import React, {FC, ReactNode, useRef, useEffect, useCallback} from 'react';
import styles from './index.module.scss'
import {useStores} from "../../utils/use-stores-hook";
import {Button} from "../../ui/Button";
import {IoCloseOutline} from 'react-icons/io5'
import {useNavigate} from "react-router";

interface Props {
    title: ReactNode;
    onClose: () => void;
    onClick: () => void;
    btnTitle: string;
    isBtnForPartners: boolean
}

export const Modal: FC<Props> = ({title, onClose, onClick,
                                     isBtnForPartners, btnTitle, children}) => {
    const {modalStore: {clearCurrentModal}} = useStores()
    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;
    let navigate = useNavigate()

    const closeModal = (e:any) => {
      if(modalRef.current === e.target){
          clearCurrentModal()
          // navigate('/')
      }
    }

    const handleBtnForPartners = () => {
    }

    return (
        <div className={styles.overlay} ref={modalRef} onClick={closeModal}>
            <div className={styles.modal_window}>
                <div className={styles.modal_header}>
                    <h3>{title}</h3>
                    <button onClick={onClose} className={styles.modal_close_btn}>
                        <IoCloseOutline className={styles.modal_close_icon}/>
                    </button>
                </div>
                <div className={styles.modal_content}>
                    {children}
                    <Button color={true} id={styles.modal_btn} onClick={onClick} title={btnTitle} />
                    {isBtnForPartners &&
                    <Button color={false} id={styles.btn_for_partners} onClick={handleBtnForPartners} title='Вход для партнеров'/>}
                </div>
            </div>
        </div>
    )
}