import styled, {css} from 'styled-components';

export const InputBaseContainer = styled.div`
    margin: 10px;
    display: inline-flex;
    flex-direction: column;
    position: relative;
`;

export const InputLabel = styled.label`
    transition: transform 50ms ease;
    padding: 0 5px;
    ${props => props.hasInnerLabel && css`
        background-color: #FFF;
        position: absolute;
        color: #A9ABBD;
        z-index: 10;
        top: 9.5px;
        left: 16px;
        div:focus-within > & {
            transform: scale(.8) translateY(-115%);
        }
    `};
`;

export const InputBaseElement = styled.input`
    min-width: 396px;
    padding: 9.5px 16px;
    appearance: none;
    border: 1px solid #E1E4EB;
    border-radius: 5px;
    ${props => props.hasInnerLabel && css`
        &::placeholder {
            visibility: hidden;
        }
        &:focus::placeholder {
            visibility: visible;
        }
    `}
`;