import React from 'react';
import ScoreBox from './ScoreBox';
import { HeaderContainer, HeaderTitle } from '../styles/MainStyledComponents';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </HeaderTitle>
      <ScoreBox />
    </HeaderContainer>
  );
}

export default Header;
