import React, { useState } from 'react';
import styled from 'styled-components';
import rules2 from '../assets/images/image-rules.svg';

const Rules = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    background: rgb(46, 4, 59);
    color: whitesmoke;
    top: -500px;
    height: 100vh;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    border-radius: 8px;
    width: 475px;
    z-index: 200;
`;

const RulesTitle = styled.div`
    display: flex;
    position: relative;
    font-size: 32px;
    color: whitesmoke;
    top: 54px;
    justify-content: center;
    font-weight: 700;
    font-family: barlow;
    font-stretch: semi-condensed;
`;

const RulesImg = styled.img`
    display: flex;
    position: absolute;
    margin-top: 450px;
    margin-left: 88px;
`;

const RulesText = styled.div`
    margin-left: 23px;
    margin-top: 69px;
    font-size: 18px;
`;

const RulesClose = styled.div`
    display: flex;
    position: relative;
    top: 445px;
    justify-content: center;
    cursor: pointer;
`;

const RulesBtn = styled.button`
    display: flex;
    position: absolute;
    font-size: 18px;
    width: 158px;
    height: 45px;
    color: white;
    font-weight: 400;
    top: 36px;
    left: 880px;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    letter-spacing: 2.5px;
    background: #fc3903;
`;

const Instructions = () => {
    const [showImage, setShowImage] = useState(null);

    const toggleImage = () => setShowImage(!showImage);

    return (
        <>
            {showImage && (
                <Rules>
                    <RulesTitle>Rules</RulesTitle>
                    <RulesText>
                        <p>
                            Rock breaks scissors and therefore 
                            rock wins over scissors.<br/> Rock loses 
                            against paper.
                        </p>
                        <p>
                            Scissors cut paper therefore scissors
                            win over paper.<br /> Scissors lose against
                            rock.
                        </p>
                        <p>
                            Paper covers rock therefore paper
                            wins over rock.<br /> Paper loses against
                            scissors.
                        </p>
                        <p>
                            If the player and computer make the 
                            same selection,<br /> there is a tie.
                        </p>
                    </RulesText>
                    <RulesImg 
                        src={rules2}
                        alt="triangle"
                    />
                    <RulesClose onClick={toggleImage}>
                        <i 
                            className="fa fa-close" 
                            style={{ 
                                fontSize: "63px", 
                                color: "black" 
                            }}
                        />
                    </RulesClose>
                </Rules>
            )}  
            <RulesBtn onClick={toggleImage}>
                Rules    
            </RulesBtn> 
        </>
    );
}

export default Instructions;
