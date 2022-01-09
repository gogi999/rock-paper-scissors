import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/gameSlice';

const YouWin = styled.h1`
    display: flex;
    position: relative;
    font-size: 56px;
    color: white;
    font-weight: 700;
    justify-content: center;
    align-items: center;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
`;

const Referee = () => {
    const compHand = useSelector((state) => state.game.player2);
    const userHand = useSelector((state) => state.game.player1);
    const startScreen = useSelector((state) => state.navigation.screen);
    const dispatch = useDispatch();
    const [outcome, setOutcome] = useState('?');

    useEffect(() => {
        if ((userHand === 'scissors') & (compHand === 'paper')) {
            setOutcome('You Win! Scissors beats Paper.');
            dispatch(increment());
        }

        if ((userHand === 'paper') & (compHand === 'rock')) {
            setOutcome('You Win! Paper beats Rock');
            dispatch(increment());
        }

        if ((userHand === 'rock') & (compHand === 'scissors')) {
            setOutcome('You Win! Rock beats Scissors');
            dispatch(increment());
        }

        if (userHand === compHand) setOutcome('Draw!');

        if ((compHand === 'scissors') & (userHand === 'paper')) {
            setOutcome('You Lose! Scissors beats Paper');
            dispatch(decrement());
        }

        if ((compHand === 'paper') & (userHand === 'rock')) {
            setOutcome('You Lose! Paper beats Rock');
            dispatch(decrement());
        }

        if ((compHand === 'rock') & (userHand === 'scissors')) {
            setOutcome('You Lose! Rock beats Scissors');
            dispatch(decrement());
        }
    }, [compHand, userHand, dispatch]);

    return (
        <>
            {startScreen === "competition" && compHand && (
                <YouWin>{outcome}</YouWin>
            )}
        </>
    );
}

export default Referee;
