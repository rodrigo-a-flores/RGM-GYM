import React, { useState } from 'react';
import Modal from './Modal';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import './HandleModal.css';

function HandleModal( {identifier} ) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="App">
            <button onClick={openModal} className="open-modal-button">
                {
                    identifier === 'register' ? 'Register' : 'Login'
                }
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {identifier === 'register' ? <Register /> : <Login />}
            </Modal>
        </div>
    );
}

export default HandleModal;
