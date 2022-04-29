import React, {forwardRef} from "react";
import PropTypes from "prop-types";

import { ButtonBaseContainer, ButtonBaseElement } from "./styled-component";

const ButtonBase = forwardRef(({
    textButton,
    isRounded,
    isPrimary,
    fullWidth
}, ref) => {

    return (
        <ButtonBaseContainer fullWidth={fullWidth}>
            <ButtonBaseElement isRounded={isRounded} isPrimary={isPrimary} ref={ref}>
                {textButton}
            </ButtonBaseElement>
        </ButtonBaseContainer>
    );
});

ButtonBase.propsTypes = {
    textButton: PropTypes.string,
    isRounded: PropTypes.bool,
    isPrimary: PropTypes.bool,
    fullWidth: PropTypes.bool,
};

export default ButtonBase;