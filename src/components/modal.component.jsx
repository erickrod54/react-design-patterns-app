import React, { useState } from "react";
import { close, openmodal } from "../assets/index.assets";
import { ModalBackground, ModalContent, OpenModalWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 3.03 - LayoutComponentPattern 
 * - Features: 
 * 
 *     --> Modifying 'Modal' button content 
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
                click in the circle for the modal:
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
