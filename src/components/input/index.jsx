import React from "react";
import { useState } from "react";
import { 
    StyleInputContainer,
    StyleInput,
    StyledPlaceholder,
    StyledErrorValidationMessage,
 } from './style'

export default ({ placeholder, type  = 'text'}) => {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState();
    const [showErrorMessage, setshowErrorMessage] = useState(false);
    return (
        <StyleInputContainer>
            <StyledPlaceholder focus={(focus || value)}>
                {placeholder}
            </StyledPlaceholder>
            <StyleInput 
                type={type}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={(e) => setValue(e.target.value)}
            />
            {showErrorMessage && (
                <StyledErrorValidationMessage>

                </StyledErrorValidationMessage>
            )}
        </StyleInputContainer>
    )
}