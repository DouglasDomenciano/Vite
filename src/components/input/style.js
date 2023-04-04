import styled from "styled-components";
import colors from "~/utils/color"

export const StyleInputContainer = styled.div`
    position: relative;
    width: ${({width}) => width ? `${width}%` : '100%'};
    height: auto;
`;

export const StyledPlaceholder = styled.label`
    background-color: white;
    width: auto;
    height: auto;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 150%;
    position: absolute;
    left: ${({focus}) => focus ? '10px' : '20px'};
    top: ${({focus}) => focus ? '-32px' : '8px'};
    color: ${colors('grey')};
    transition: all 250ms;
    padding: 0 8px;
    z-index: 2;
`;

export const StyleInput = styled.input`
    width: ${({width}) => width ? `${width}%` : '100%'};
    border-radius: 8px;
    border: solid 0.5px rgba(0,0,0,0.1);
    box-shadow: ${colors('box-shadow')};
    min-height: 40px;
    padding: 10px 20px;
    &:focus {
        outline: none
    }
    color: ${colors('grey')};
    z-index: 1;
`;

export const StyledErrorValidationMessage = styled.span`

`;