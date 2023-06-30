import React, { useRef } from "react";
import { useState } from "react";
import { 
    StyleInputContainer,
    StyleInput,
    StyledPlaceholder,
    StyledErrorValidationMessage,
 } from './style'

export default ({ placeholder, type  = 'text'}) => {
    const inputRef = useRef()
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState();
    const [showErrorMessage, setshowErrorMessage] = useState(false);
    return (
        <StyleInputContainer>
            <StyledPlaceholder
                focus={(focus || value)}
                onClick={() => {
                    inputRef.current.focus()
                    setFocus(true)}
                }
            >
                {placeholder}
            </StyledPlaceholder>
            <StyleInput
                ref={inputRef}
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