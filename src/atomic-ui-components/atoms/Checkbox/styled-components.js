import styled from "styled-components";

export const CheckboxContainer = styled.label`
    display: inline-block;
    position: relative;
`;

export const CheckboxCustomElement = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #1FA0DC;
    display: inline-block;
    border-radius: 5px;
    height: 20px;
    width: 20px;
`;

export const MarkIconContainer = styled.div`
    display: none;
    position: absolute;
    height: 6.25px;
    width: 10px;
    top: 5px;
    left: 5px;

    input:checked + & {
        display: inline-block;
    }
`;