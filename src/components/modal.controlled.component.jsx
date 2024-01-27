import React, { useState } from "react";
import { close, openmodal } from "../assets/index.assets";
import { ModalBackground, ModalContent, OpenModalWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 5.19 - ControlledModal - 
 * - Features: 
 * 
 *     --> Renaming 'displayModal' to 'showModal'
 * 
 * Note: This is the first topic
 */

const ControlledModal = ({ showModal, closeModal, stopPropagation, children }) => {

    return (
        <>
            {showModal && (
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

export default ControlledModal;
