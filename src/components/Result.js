import React, { useState, useEffect } from 'react';
import rockIcon from '../assets/icon-rock.svg';
import paperIcon from '../assets/icon-paper.svg';
import scissorsIcon from '../assets/icon-scissors.svg';
import { ResultsContainer, ResultContainer } from '../styles/MainStyledComponents';

const Result = ({ userChoice, compChoice, playAgain, winner }) => {
  const [userIcon, setUserIcon] = useState(null);
  const [compIcon, setCompIcon] = useState(null);

  useEffect(() => {
    const pickUserIcon = () => {
      if (userChoice === 'rock') {
        setUserIcon(rockIcon);
      } else if (userChoice === 'scissors') {
        setUserIcon(scissorsIcon);
      } else if (userChoice === 'paper') {
        setUserIcon(paperIcon);
      } else return;
    }

    const pickCompIcon = () => {
      if (compChoice === 'rock') {
        setCompIcon(rockIcon);
      } else if (compChoice === 'scissors') {
        setCompIcon(scissorsIcon);
      } else if (compChoice === 'paper') {
        setCompIcon(paperIcon);
      } else return;
    }
    pickCompIcon();
    pickUserIcon();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <ResultsContainer>
        <ResultContainer>
          <h2>You Picked</h2>
          <div className={`option-border ${userChoice}`}>
            <div className='option'>
              <img src={userIcon} alt='paper-hand' />
            </div>
          </div>
        </ResultContainer>
        <div className='winner-desktop'>
          <h1 style={{ fontSize: '3em' }}>{winner}</h1>
          <div className='button play-again' onClick={playAgain}>
            <h3>Play Again</h3>
          </div>
        </div>
        <ResultContainer>
          <h2>Computer Picked</h2>
          <div className={`option-border ${compChoice}`}>
            <div className='option'>
              <img src={compIcon} alt='paper-scissors' />
            </div>
          </div>
        </ResultContainer>
      </ResultsContainer>
      <div className='winner-mobile'>
        <h1 style={{ fontSize: '3em' }}>{winner}</h1>
        <div className='button play-again' onClick={playAgain}>
          <h3>Play Again</h3>
        </div>
      </div>
    </>
  );
}

export default Result;
