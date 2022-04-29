import React, {forwardRef} from 'react';
import PropTypes from "prop-types";

import {
    InputBaseContainer,
    InputBaseElement,
    InputLabel,
    WrapperAsideIcon
} from "./styled-component";

const InputBase = forwardRef(({
    labelText,
    inputType,
    placeholderText,
    changeHandler = (event) => event.preventDefault(),
    hasInnerLabel,
    id,
    classNames,
    asideIcon
}, ref) => {
    
    const inputId = (id ?? labelText.replace(" ", "-")).toLowerCase();
    let IconElement;
    
    if (asideIcon) {
        IconElement = React.createFactory(asideIcon);
    }
    return (
        <InputBaseContainer>
            
            <InputLabel htmlFor={inputId} hasInnerLabel={hasInnerLabel}>
                {labelText}
            </InputLabel>
            <InputBaseElement 
                type={inputType}
                placeholder={placeholderText}
                aria-label={labelText}
                className={classNames}
                id={inputId}
                onChange={changeHandler}
                hasInnerLabel={hasInnerLabel}
                ref={ref}
            />

            {asideIcon && (
                <WrapperAsideIcon>
                    <IconElement />
                </WrapperAsideIcon>
            )}
        </InputBaseContainer>
    );
});

InputBase.propTypes = {
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    placeholderText: PropTypes.string,
    changeHandler: PropTypes.func,
    hasOuterLabel: PropTypes.bool,
    id: PropTypes.string,
    classNames: PropTypes.string,
    asideIcon: PropTypes.element
};

InputBase.defaultProps = {
    inputType: "text",
}

export default InputBase;