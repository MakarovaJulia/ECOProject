import React, {FC, ReactNode, useRef} from 'react';
import styles from './index.module.scss'
import {useStores} from "../../utils/use-stores-hook";
import {Button} from "../../ui/Button";
import {IoCloseOutline} from 'react-icons/io5'
import {AuthPartnersModal} from "../AuthPartnersModal";

interface Props {
    title: ReactNode;
    onClose: () => void;
    hasBtnForPartners: boolean;
    hideCloseBtn?: boolean;
}

export const    Modal: FC<Props> = (
    {
        title,
        onClose,
        hasBtnForPartners,
        children,
        hideCloseBtn=false
    }) => {
    const {modalStore: {clearCurrentModal, setCurrentModal}} = useStores()
    const modalRef = useRef() as React.MutableRefObject<HTMLInputElement>;

    const closeModal = (e:any) => {
      if(modalRef.current === e.target){
          clearCurrentModal()
      }
    }

    const handleBtnForPartners = () => {
        clearCurrentModal();
        setCurrentModal(AuthPartnersModal)
    }

    return (
        <div className={styles.overlay} ref={modalRef} onClick={closeModal}>
            <div className={styles.modal_window}>
                <div className={styles.modal_header}>
                    <h3>{title}</h3>
                    {!hideCloseBtn &&
                        <button onClick={onClose} className={styles.modal_close_btn}>
                            <IoCloseOutline className={styles.modal_close_icon}/>
                        </button>
                    }
                </div>
                <div className={styles.modal_content}>
                    {children}
                    {hasBtnForPartners &&
                    <Button color={false} id={styles.btn_for_partners} onClick={handleBtnForPartners} title='Вход для партнеров'/>}
                </div>
            </div>
        </div>
    )
}