import React from 'react';
import closeIcon from '../assets/icon-close.svg';
import { ModalStyledComponent, ModalContent } from '../styles/ModalStyledComponents';

const Modal = ({ closeModal, isModalOpen }) => {
    return (
      <>
        <ModalStyledComponent 
          style={{ display: isModalOpen ? 'block' : 'none' }}
        >
          <ModalContent>
            <div className='rules-modal'>
              <div className='modal-header'>
                <h1>Rules</h1>
                <img
                  className='close-icon'
                  onClick={closeModal}
                  style={{ cursor: 'pointer' }}
                  src={closeIcon}
                  alt='close-icon'
                />
              </div>
              <img
                className='close-icon-mobile'
                onClick={closeModal}
                style={{ cursor: 'pointer' }}
                src={closeIcon}
                alt='close-icon'
              />
              <div className="rules-text">
                <p>
                  Rock breaks scissors and therefore 
                  rock wins over scissors. 
                </p>
                <p>
                  Rock loses against paper.
                </p>
                <br />
                <p>
                  Scissors cut paper therefore scissors
                  win over paper. 
                </p>
                <p>
                  Scissors lose against rock.
                </p>
                <br />
                <p>
                  Paper covers rock therefore paper
                  wins over rock.
                </p>
                <p>
                  Paper loses against scissors.
                </p>
                <br />
                <p>
                  If the player and computer make the 
                  same selection, there is a tie.
                </p>
              </div>
            </div>
          </ModalContent>
        </ModalStyledComponent>
      </>
    );
}

export default Modal
