import styled from 'styled-components';

export const ModalStyledComponent = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
    line-height: 0px;
    color: hsl(229, 25%, 31%);
    font-family: 'Barlow Semi Condensed', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    animation: fadeInModal 0.5s;
`;
