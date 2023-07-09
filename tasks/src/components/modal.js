import React, { useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Modal from 'react-modal';
import CreatTask from './creat-task';
Modal.setAppElement('#root'); // Set the app element to the root element of application to avoid console errors

const customModalStyles = {
    content: {
        maxWidth: '800px', 
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '800px',
        zIndex: '1000',
    },
  };
const AddTaskModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [rerenderKey, setRerenderKey] = useState(0);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setRerenderKey((prevKey) => prevKey + 1);
    };

    return (
        <div className="plus-icon-wrapp">
            <BsFillPlusCircleFill onClick={openModal} className=' modal-opener plus-icon' />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Modal"
                style={customModalStyles}
            >
                
                <CreatTask CloseModal={closeModal} Key={rerenderKey} />

                <AiFillCloseCircle onClick={closeModal} className='close-modal-btn' size={32} />

            </Modal>
        </div>
    );
};

export default AddTaskModal;
