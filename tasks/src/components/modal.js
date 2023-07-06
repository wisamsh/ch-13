import React, { useState } from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element to the root element of application to avoid console errors

const MyComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div class="plus-icon-wrapp">
      <BsFillPlusCircleFill  onClick={openModal} className=' modal-opener plus-icon'/>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <h2>Add Task</h2>
        
        <AiFillCloseCircle onClick={closeModal} className='close-modal-btn' size={32}/>
        
      </Modal>
    </div>
  );
};

export default MyComponent;
