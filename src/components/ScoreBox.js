import React from 'react';
import { useSelector } from 'react-redux';
import { ScoreBoxContainer, ScoreResult, ScoreText } from '../styles/MainStyledComponents';

const ScoreBox = () => {
    const score = useSelector(state => state.score.score);

    return (
        <ScoreBoxContainer>
            <ScoreText>Score</ScoreText>
            <ScoreResult>{score}</ScoreResult>
        </ScoreBoxContainer>
    );
}

export default ScoreBox;
