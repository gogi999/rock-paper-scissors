import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Paper } from '../assets/images/icon-paper.svg';
import { ReactComponent as Rock } from '../assets/images/icon-rock.svg';
import { ReactComponent as Scissors } from '../assets/images/icon-scissors.svg';

const PaperBtn = styled.button`
    width: 144px;
    height: 144px;
    background: linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%);
    border-radius: 50%;
    border-width: 5px;
    border: 9px solid #4664f4;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    stroke-width: 4px;
    cursor: pointer;
`;

const RockBtn = styled.button`
   width: 144px;
    height: 144px;
    background: linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%);
    border-radius: 50%;
    border-width: 5px;
    border: 9px solid #db2e4d;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    stroke-width: 4px;
    cursor: pointer;
`;

const ScissorsBtn = styled.button`
    width: 144px;
    height: 144px;
    background: linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%);
    border-radius: 50%;
    border-width: 5px;
    border: 9px solid #eb9f0e;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    stroke-width: 4px;
    cursor: pointer;
`;

const Hand = ({ shape, onHandClick }) => {
    const handleClick = (e) => {
        e.preventDefault();
        onHandClick(shape);
    }

    switch (shape) {
        case 'paper': 
            return (
                <PaperBtn onClick={handleClick}>
                    <Paper />
                    <h3>Paper</h3>
                </PaperBtn>
            );

        case 'scissors': 
            return (
                <ScissorsBtn onClick={handleClick}>
                    <Scissors />
                    <h3>Scissors</h3>
                </ScissorsBtn>
            );

        case 'rock': 
            return (
                <RockBtn onClick={handleClick}>
                    <Rock />
                    <h3>Rock</h3>
                </RockBtn>
            );

        default: 
            return null;
    }
}

export default Hand;
