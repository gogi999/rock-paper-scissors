import React from 'react';
import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorsIcon from '../assets/icon-scissors.svg';
import bgTriangle from '../assets/bg-triangle.svg';
import { OptionsContainer, TriangleContainer } from '../styles/MainStyledComponents'

const Options = ({ userChoice }) => {
  return (
    <OptionsContainer>
      <TriangleContainer>
        <img className='triangle' src={bgTriangle} alt='background-shape' />
      </TriangleContainer>
      <div onClick={() => userChoice('paper')} className='option-border paper'>
        <div className='option'>
          <img src={paperIcon} alt='paper-hand' />
          <h3 className="option-text-p">Paper</h3>
        </div>
      </div>

      <div
        onClick={() => userChoice('scissors')}
        className='option-border scissors'
      >
        <div className='option'>
          <img src={scissorsIcon} alt='paper-scissors' />
          <h3 className="option-text-s">Scissors</h3>
        </div>
      </div>

      <div onClick={() => userChoice('rock')} className='option-border rock'>
        <div className='option'>
          <img src={rockIcon} alt='rock-hand' />
          <h3 className="option-text-r">Rock</h3>
        </div>
      </div>
    </OptionsContainer>
  );
}

export default Options;
