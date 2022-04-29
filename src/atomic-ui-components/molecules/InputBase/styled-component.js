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
    color: #595959;
    ${props => props.hasInnerLabel && css`
        background-color: #FFF;
        position: absolute;
        color: #A9ABBD;
        z-index: 10;
        top: 9.5px;
        left: 16px;
        div:focus-within > & {
            transform: scale(.8) translateY(-115%);
            color: #39557C;
        }
    `};
`;

export const InputBaseElement = styled.input`
    min-width: 396px;
    padding: 9.5px 16px;
    appearance: none;
    border: 1px solid #E1E4EB;
    border-radius: 5px;
    outline: none;
    ${props => props.hasInnerLabel && css`
        &::placeholder {
            visibility: hidden;
        }
        &:focus::placeholder {
            visibility: visible;
        }
    `}
    &:focus {
        border-color: #39557C;
        border-width: 1px;
    }
`;

export const WrapperAsideIcon = styled.span`
    position: absolute;
    right: 5px;
    top: 5px;
`;