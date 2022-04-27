import React from 'react';
import PropTypes from 'prop-types';

import {
    InputBaseContainer,
    InputBaseElement,
    InputLabel
} from "./styled-component";

const InputBase = ({
    labelText,
    inputType,
    placeholderText,
    changeHandler,
    hasInnerLabel,
    inputId,
    classNames
}) => {
    inputId ??= labelText.split(' ').join('-');

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
                hasInnerLabel={hasInnerLabel}
            />
        </InputBaseContainer>
    );
};

InputBase.propTypes = {
    labelText: PropTypes.string.isRequired,
    inputType: PropTypes.string,
    placeholderText: PropTypes.string,
    changeHandler: PropTypes.func,
    hasOuterLabel: PropTypes.bool,
    inputId: PropTypes.string,
    classNames: PropTypes.string
};

InputBase.defaultProps = {
    inputType: "text",
}

export default InputBase;