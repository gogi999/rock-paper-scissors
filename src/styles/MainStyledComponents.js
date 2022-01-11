import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5vh;
`;

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60vw;
    max-width: 600px;
    border: 2px solid hsl(217, 16%, 45%);
    border-radius: 10px;
    padding: 8px 12px 8px 20px;
    margin-bottom: 5vh;
    @media (max-width: 540px) {
        width: 75vw;
        font-size: 0.8em;
    }
`;

export const HeaderTitle = styled.div`
    color: white;
    line-height: 4px;
    font-size: 1.3em;
    font-weight: 700;
`;

export const ScoreBoxContainer = styled.div`
    line-height: 4px;
    background: white;
    border-radius: 10px;
    text-align: center;
    padding: 10px 30px;
    @media (max-width: 540px) {
        padding: 4px 20px;
        font-size: 1.2em;
    }
`;

export const ScoreText = styled.h2`
    color: hsl(229, 64%, 46%);
    letter-spacing: 2px;
`;

export const ScoreResult = styled.h2`
    color: hsl(229, 64%, 46%);
    font-size: 3.2em;
    font-weight: 700;
`;

export const OptionsContainer = styled.div`
   position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 500px;
    margin: 20px;
    @media (max-width: 540px) {
        width: 90vw;
        max-width: 340px;
        min-width: 270px;
    }
`;

export const TriangleContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ResultsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 450px;
    @media (max-width: 540px) {
        height: auto;
    }
`;

export const ResultContainer = styled.div`
    text-align: center;
    letter-spacing: 3px;
    font-size: 1.2em;
    @media (max-width: 540px) {
       font-size: 1em;
        letter-spacing: 2px;
    }
`;
