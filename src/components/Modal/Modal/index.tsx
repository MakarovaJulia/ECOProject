import React, {FC, ReactNode} from 'react';

interface Props {
    title: ReactNode;
    onClose: () => void;
}

export const Modal: FC<Props> = ({title, onClose, children}) => {
    return (
        <div>
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