import React, { useEffect, useRef } from 'react'

import style from '../../styles/PurchaseRefusalModal.module.css'

export const PurchaseRefusalModal = ({isOpen, onClose, children}) => {
    const modalRef = useRef(null);

    useEffect(()=>{
        function handleClickOutside(event){
            if(modalRef.current && !modalRef.current.contains(event.target)){
                onClose()
            }
        }
        
        if(isOpen){
            document.addEventListener('mousedown', handleClickOutside)
        }else {
            document.removeEventListener('mousedown', handleClickOutside)
        }

        return()=>{
            document.removeEventListener('mousedown', handleClickOutside)
        }

    }, [isOpen, onClose])

    if(!isOpen) return null


  return (
    <div className={style.overlay}>
        <div ref={modalRef} className={style.modal}>
            <button onClick={onClose} className={style.closeButton}>
                Close
            </button>
            {children}
        </div>
        
    </div>
  )
}
