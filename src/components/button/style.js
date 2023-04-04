import styled from "styled-components";
import colors from "~/utils/color"

const sizes = {
    small: {
        padding: '4px 0px'
    },
    medium: {
        padding: '8px 0px'
    },
    large: {
        padding: '12px 0px'
    }
}

export const StyleButton = styled.button`
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: ${colors('primary')};
    font-size: 12px;
    padding: 8px 10px;
    color: #fff;
    padding: ${({ size }) => sizes[size]?.padding || sizes.small.padding};
    border: 2px solid ${colors('primary')};
    &:hover {
        background-color: #fff;
        color: ${colors('primary')};
    }
     &.outline {
        background-color: #fff;
        border: 2px solid ${colors('primary')};
        color: ${colors('primary')};
        &:hover {
            background-color: ${colors('primary')};
            color: #fff;
        }
    }
    transition: all 500ms;
`;