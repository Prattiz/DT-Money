import styled from "styled-components";

export const Container = styled.header`

    background-color: ${props => props.theme["gray-900"]};
    padding: 4.4rem 0 12.6rem;
`

export const Content = styled.div`

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1{
        display: flex;
        font-size: 2rem;
        align-items: center;
        gap:10px;
    }
`

export const ButtonTransaction = styled.button`

    background-color: ${props => props.theme["green-500"]};
    color:${props => props.theme["white"]};
    font-weight: bold;
    border-radius: 8px;
    padding: 1.5rem 2.0rem;
`