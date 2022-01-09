import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Hand from '../components/Hand';
import oval from '../assets/images/Oval Copy 2.png';

const Competition = styled.div`
    display: flex;
    margin-top: 42px;
    height: 180px;
    margin-left: 32px;
    margin-right: 32px;
    justify-content: space-between;
    z-index: 1;
    transform: scale(1.03);
    transition: transform 1s ease-in-out;
    cursor: zoom-out;
    &:hover {
        transform: scale(1.1);
    }
`;

const Picked = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 13px;
    font-style: Barlow semi-condensed;
    letter-spacing: 0.2px;
`;

const OvalyImg = styled.img`
    position: relative;
  top: -60px;
  left: 115px;
  background-size: 20px;
  border-radius: 50%;
  max-width: 130px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const CompContainer = () => {
    const player1 = useSelector((state) => state.game.player1);
    const player2 = useSelector((state) => state.game.player2);
    const screen = useSelector((state) => state.navigation.screen);

    if (screen !== 'competition') return null;
    
    return (
        <Competition>
            <div>
                <Hand shape={player1} onHandClick={() => null} />
                <Picked>You Picked</Picked>
            </div>
            <div>
                {player2 ? (
                    <Hand shape={player2} onHandClick={() => null} />
                ) : (
                    <OvalyImg src={oval} alt="blank" />
                )}
                <Picked>The House Picked</Picked>
            </div>
        </Competition>
    );
}

export default CompContainer;
