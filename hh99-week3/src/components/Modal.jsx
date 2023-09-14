import React from 'react';
import styled from 'styled-components';

const ModalStyle = styled.div`
    background-color: gray;
    /* display: flex; */
    width: 100%;
    height: 100vh;
    top: 0;
    opacity: 0.8;
    position: fixed;
`;
const ModalContent = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 300px;
    height: 300px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Modal = ({ showModal, onClose }) => {
    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    if (!showModal) {
        return null;
    }
    return (
        <>
            <ModalStyle onClick={handleOverlayClick}></ModalStyle>
            <ModalContent>
                <h2>Modal Title</h2>
                <p>Modal content goes here...</p>
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </>
    );
};

export default Modal;
