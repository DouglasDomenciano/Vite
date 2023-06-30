import styled from "styled-components";
import color from "../../utils/color";

export const StyleHeaderContainer = styled.nav`
    width: 60%;
    height: 60px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${color('secondary')};
    padding: 0px 32px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    div:nth-child(even) {
        margin: 0px 32px;
    }
`;

export const StyleNavIcon = styled.div`
    color: white;
    font-size: 1.6rem;
    :hover {
        /* background-color: ${color('grey-1')}; */
        font-size: 2.6rem;
        transition: 1s;
    }
`;