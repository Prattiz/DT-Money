import styled from "styled-components";

interface PriceProps{
    variant: 'Income' | 'outcome'
}

export const Container = styled.div``

export const Trasaction = styled.main`

    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 2rem;

    table{
        width: 100%;
        border-collapse: separate;
        border-spacing: 0 0.8rem;
        margin-top: 2rem;


        td{
            padding: 1.5rem 3rem;
            background-color: ${props => props.theme['gray-700']};

            &:first-child{
                border-top-left-radius: 6px;
                border-bottom-left-radius: 6px;
            }
            &:last-child{
                border-top-right-radius: 6px;
                border-bottom-right-radius: 6px;
            }
        }
    }
`

export const Price = styled.span<PriceProps>`

    color: ${props => props.variant === 'Income' ? props.theme['green-300'] : props.theme['red-300']}
`

