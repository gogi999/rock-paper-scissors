import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseScore,
  decreaseScore,
  resetScore,
} from '../actions/scoreActions';
import Header from './Header';
import Modal from './Modal';
import Options from './Options';
import Result from './Result';
import ButtonContainer from './ButtonContainer';
import Footer from './Footer';
import { MainContainer } from '../styles/MainStyledComponents';

const App = () => {
  const [modal, setModal] = useState(false);
  const [userChoice, setUserChoice] = useState(null);
  const [compChoice, setCompChoice] = useState(null);
  const [winner, setWinner] = useState('');

  const score = useSelector((state) => state.score.score);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setModal(true);
  }

  const handleCloseModal = () => {
    setModal(false);
  }

  const handleReset = () => {
    setCompChoice(null);
    setUserChoice(null);
  }

  const handleUserChoice = (choice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const winnerMsg = 'You Won!'
    const loserMsg = 'You Lose!';

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];

    setUserChoice(choice);
    setCompChoice(randomChoice);

    if (choice === randomChoice) {
      setWinner('Draw!');
    } else if (choice === 'rock' && randomChoice === 'scissors') {
      setWinner(winnerMsg);
      dispatch(increaseScore);
    } else if (choice === 'scissors' && randomChoice === 'paper') {
      setWinner(winnerMsg);
      dispatch(increaseScore);
    } else if (choice === 'paper' && randomChoice === 'rock') {
      setWinner(winnerMsg);
      dispatch(increaseScore);
    } else {
      setWinner(loserMsg);
      dispatch(decreaseScore);
    }
  }

    return (
      <MainContainer>
        <Modal
            openModal={handleOpenModal}
            closeModal={handleCloseModal}
            isModalOpen={modal}
        />

        <Header score={score} />
        {!userChoice && <Options userChoice={handleUserChoice} />}
        {userChoice && (
            <Result
                compChoice={compChoice}
                userChoice={userChoice}
                playAgain={handleReset}
                winner={winner}
            />
        )}
        <ButtonContainer 
          handleOpenModal={handleOpenModal}
          score={score}
          resetScore={resetScore}
        />  
        <Footer />
      </MainContainer>
    );
}

export default App;
