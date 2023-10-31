import { Container, Content, ButtonTransaction } from "./styles";
import icon from "../../assets/headerIcon.svg"
import * as Dialog from "@radix-ui/react-dialog";
import { TransactionModal } from "../TransactionModal";


export function Header() {

  return (
    <Container>
        <Content>
            <h1>
                <img src={icon}/>
                DT Money
            </h1>
            <Dialog.Root>
              <ButtonTransaction>New Transaction</ButtonTransaction>

              
              <TransactionModal/>
            </Dialog.Root>
        </Content>
    </Container>
  )
}