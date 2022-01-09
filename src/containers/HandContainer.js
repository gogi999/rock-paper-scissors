import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setPlayer1, setPlayer2 } from '../redux/gameSlice';
import { setScreen } from '../redux/navigationSlice';
import Hand from '../components/Hand';

const Hands = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: 63px;
    height: 200px;
    margin-left: 69px;
    margin-right: 69px;
    &:hover {
        transform: scale(1.02);
        transition: transform 0.3s ease-in-out;
    }
`;

const HandsStop = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
`;

const HandsBottom = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
    z-index: 1;
`;

const HandContainer = () => {
    const dispatch = useDispatch();
    const screen = useSelector((state) => state.navigation.screen);
    
    const onHandClick = (newShape) => {
        dispatch(setPlayer1(newShape));
        setTimeout(() => dispatch(setPlayer2()), 1000);
        dispatch(setScreen('competition'));
    }

    if (screen !== 'start') return null;
    
    return (
        <Hands>
            <HandsStop>
                <Hand shape="paper" onHandClick={onHandClick} />
                <Hand shape="scissors" onHandClick={onHandClick} />
            </HandsStop>
            <HandsBottom>
                <Hand shape="rock" onHandClick={onHandClick} />
            </HandsBottom>
        </Hands>
    );
}

export default HandContainer;
