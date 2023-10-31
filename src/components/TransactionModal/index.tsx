import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { OverLay, Content, XButton, DivRadio, ButtonRadio } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";





export function TransactionModal(){
    return(
       
        <Dialog.Portal>

            <OverLay />

            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>
                <XButton><X/></XButton>
                
                <form>
                    <input type="text" required placeholder="Description"/>
                    <input type="text" required placeholder="Price"/>
                    <input type="text" required placeholder="Category"/>

                    <DivRadio>
                        <ButtonRadio value="Gains" variant="income">
                            <ArrowCircleUp/>
                            Gains 
                        </ButtonRadio>

                        <ButtonRadio value="Loss" variant="outcome">
                            <ArrowCircleDown/>
                            Loss 
                        </ButtonRadio>
                    </DivRadio>

                    <button type="submit">Register</button>
                </form>
            
            </Content>

        </Dialog.Portal>

    )
}