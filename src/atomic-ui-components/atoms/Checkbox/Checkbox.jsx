import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import {ReactComponent as CheckMarkIcon} from "../../icons/check-mark.svg";

import {
    CheckboxContainer,
    CheckboxCustomElement,
    MarkIconContainer,
} from "./styled-components";


const Checkbox = forwardRef(({
    isChecked,
    isDisabled
}, ref) => {

    return (
        <CheckboxContainer>
            <CheckboxCustomElement />
            <input type="checkbox" hidden ref={ref} checked={isChecked} />
            <MarkIconContainer>
                <CheckMarkIcon />
            </MarkIconContainer>
        </CheckboxContainer>
    );
});

Checkbox.propsTypes = {
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
};

export default Checkbox;