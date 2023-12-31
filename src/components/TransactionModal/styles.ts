import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';


export const OverLay = styled(Dialog.Overlay)`

    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0 , 0 , 0 , 0.75);
`

export const Content = styled(Dialog.Content)`

    min-width: 51rem;
    border-radius:6px;
    padding: 4rem 4.8rem;
    background-color: ${props => props.theme['gray-800']};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    
    form{
        margin-top: 3.2rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;    

        input{
            border-radius: 6px;
            border: 0;
            background-color: ${props => props.theme['gray-900']};
            color: ${props => props.theme['gray-300']};
            padding: 1.6rem;

            &::placeholder{
                color: ${props => props.theme['gray-500']}; 
            }
        }

        button[type="submit"]{
            height: 5.8rem;
            background-color: ${props => props.theme['green-500']};
            color: ${props => props.theme['white']};
            font-weight: bold;
            padding: 0 1.5rem;
            border-radius: 6px;
            margin-top: 1.5rem;
            
            &:disabled{
                cursor: not-allowed;
                background-color: transparent;
            }
        }
    }

    svg{
        width: 20px;
        height: 20px;
    }
`

export const XButton = styled(Dialog.Close)`
    
    background: none;
    position: absolute;
    top: 2.4rem;
    right: 2.4rem;
    line-height: 0;

    svg{
        color: ${props => props.theme['gray-500']};
        
    }
`

export const DivRadio = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface Props{
    variant: 'income' | 'outcome'
}

export const ButtonRadio = styled(RadioGroup.Item,)<Props>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme['gray-300']};

  svg{
    color: ${(props) => props.variant === 'income' ? props.theme["green-300"] : props.theme['red-300']};
  }

  &[data-state='checked']{
    color: ${(props) => props.theme['white']};
    background-color: ${(props) => props.variant === 'income' ? props.theme['green-500'] : props.theme['red-500']};

    svg{
        color: ${(props) => props.theme['white']} !important;
    }
  }
`