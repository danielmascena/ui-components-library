import React from 'react';
import PropTypes from 'prop-types';

import {
    InputBaseContainer,
    InputBaseElement
} from "./styled-component";

const InputBase = ({
    labelText,
    inputType,
    placeholderText,
    changeHandler
}) => {

    return (
        <InputBaseContainer>
            <InputBaseElement type={inputType} placeholder={placeholderText} aria-label={labelText} />
        </InputBaseContainer>
    );
};

InputBase.propTypes = {
    labelText: PropTypes.string,
    inputType: PropTypes.string,
    placeholderText: PropTypes.string,
    changeHandler: PropTypes.func,
};

InputBase.defaultProps = {
    inputType: "text"
}

export default InputBase;