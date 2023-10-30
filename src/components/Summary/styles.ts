import styled from "styled-components";

export const Container = styled.section`

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
    margin-top: -6rem;

    div:last-child {
      background-color: ${props => props.theme['green-700']};
    }
`

export const Card = styled.div`

    background-color: ${props => props.theme['gray-600']};
    border-radius: 8px;
    padding: 2.4rem;
    
    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: ${props => props.theme['gray-300']};
    }

    strong{
        display: block;
        margin-top: 1.6rem;
        font-size: 3.2rem;
    }
`