import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: none;
    background-color: #505050;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    width: 62px;
    height: 62px;
    max-width: 62px;
    max-height: 62px;

    border-radius: 116px;
    margin: 20px;
    

    ${({variant}) =>
    variant === 'primary' &&
    css`
      padding: 0 54px;
      border-radius: 50px;
      max-width: 144px;
    `}

    ${({variant}) =>
    variant === 'orange' &&
    css`
    background-color: #FF9500;
    max-width: 62px;
    max-height: 62px;
    `}

    ${({variant}) =>
    variant === 'white' &&
    css`
    background-color: #D4D4D2;
    color: #1C1C1C;
    max-width: 62px;
    max-height: 62px;
    `}
    

    &:hover {
        opacity: 0.6;
    }
`