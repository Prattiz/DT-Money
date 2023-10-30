import { Container, Content, ButtonTransaction } from "./styles";
import icon from "../../assets/headerIcon.svg"


export function Header() {

  return (
    <Container>
        <Content>
            <h1>
                <img src={icon}/>
                DT Money
            </h1>
            <ButtonTransaction>Nova Transação</ButtonTransaction>
        </Content>
    </Container>
  )
}