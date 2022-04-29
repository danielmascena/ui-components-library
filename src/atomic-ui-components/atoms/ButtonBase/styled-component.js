import styled, {css} from 'styled-components';

export const ButtonBaseContainer = styled.div`
    display: inline-flex;
    ${({fullWidth}) => fullWidth && "width: 100%;"};
`;

export const ButtonBaseElement = styled.button`
    min-width: 60px;
    height: 45px;
    width: inherit;
    border: none;
    padding: 12px 10px 9px;
    background-color: #E1E4EB;

    ${(props) => props.isPrimary && css`
        color: #fff;
        font-weight: 700;
        background-color: #20A0DB;
    `};

    ${(props) => props.isRounded && css`
        border-radius: 37px;
    `};
`;