import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonContainer = ({ handleOpenModal, score, resetScore}) => {
    const dispatch = useDispatch();
    
    return (
        <div className='button-container'>
            <div className='button rules' onClick={handleOpenModal}>
              <h3 >Rules</h3>
            </div>
            {score !== 0 && (
            <div className='button' onClick={() => dispatch(resetScore)}>
              <h3>Reset Score</h3>
            </div>
            )}
        </div>
    );
}

export default ButtonContainer;
