import React, { useState } from "react";
import { close, openmodal } from "../assets/index.assets";
import { ModalBackground, ModalContent, OpenModalWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 3.02 - Modal 
 * - Features: 
 * 
 *     --> Building 'Modal' Component
 * 
 * Note: This is the first topic
 */

const Modal = ({ children }) => {
    const [show, setShow] = useState(false);

    const openModal = () => setShow(true);
    const closeModal = () => setShow(false);
    const stopPropagation = (e) => e.stopPropagation();

    return (
        <>
            <button onClick={openModal}>
                Show modal 
                <OpenModalWrapper>
                    <img src={openmodal} alt="openmodal"/>
                </OpenModalWrapper>
            </button>
            {show && (
                <ModalBackground onClick={closeModal}>
                    <ModalContent onClick={stopPropagation}>
                        <button onClick={closeModal}>
                        <img src={close} alt="close"/>
                        </button>
                        {children}
                    </ModalContent>
                </ModalBackground>
            )}
        </>
    );
};

export default Modal;
