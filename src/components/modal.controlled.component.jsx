import React, { useState } from "react";
import { close, openmodal } from "../assets/index.assets";
import { ModalBackground, ModalContent, OpenModalWrapper } from "../styledcomponents/styled.components";

/**react-design-patterns-app - version 4.07 - ControlledModal - 
 * - Features: 
 * 
 *     --> Building 'ControlledModal' button content 
 * 
 * Note: This is the first topic
 */

const ControlledModal = ({ displayModal, closeModal, stopPropagation, children }) => {

    return (
        <>
            {displayModal && (
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
