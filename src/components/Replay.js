import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setScreen } from '../redux/navigationSlice';
import Instructions from './Instructions';

const PlayAgainBtn = styled.button`
    display: flex;
    position: relative;
    font-size: 18px;
    width: 230px;
    height: 54px;
    color: white;
    font-weight: 600;
    top: 0px;
    justify-content: center;
    align-items: center;
    color: #3b4262;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    border-radius: 9px;
`;

const Replay = () => {
    const startScreen1 = useSelector(state => state.navigation.screen);
    const compHand = useSelector(state => state.game.player2);
    const dispatch = useDispatch();

    return (
        <>
            {startScreen1 === "competition" && compHand && (
                <PlayAgainBtn
                    onClick={() => dispatch(setScreen("start"))}
                >
                    Play Again
                </PlayAgainBtn>
            )}
            {true && <Instructions />}
        </>
    );
}

export default Replay;
