import styled from "styled-components";

export const Form = styled.form`

    display: flex;
    gap: 1.6rem;

    input{
        flex:1;
        border-radius: 6px;
        border: 0;
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
        padding: 1.6rem;

        &::placeholder{
            color: ${props => props.theme['gray-500']}; 
        }
    }

    button{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.6rem;
        background-color: transparent;
        border: 1px solid ${props => props.theme['green-300']};
        color: ${props => props.theme['green-300']};
        font-weight: bold;
        border-radius: 6px;

        &:hover{
            background-color:${props => props.theme['green-300']};
            color: ${props => props.theme['white']};
        }

        &:disabled{
            cursor: not-allowed;
            background-color: transparent;
        }
    }
`