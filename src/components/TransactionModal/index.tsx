import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { OverLay, Content, XButton, DivRadio, ButtonRadio } from "./styles";
import * as Dialog from "@radix-ui/react-dialog";





export function TransactionModal(){
    return(
       
        <Dialog.Portal>

            <OverLay />

            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>
                <XButton><X size={23}/></XButton>
                
                <form>
                    <input type="text" required placeholder="Description"/>
                    <input type="text" required placeholder="Price"/>
                    <input type="text" required placeholder="Category"/>

                    <DivRadio>
                        <ButtonRadio value="Gains">
                            <ArrowCircleUp size={20} color="#00B37E"/>
                            Gains 
                        </ButtonRadio>

                        <ButtonRadio value="Loss">
                            <ArrowCircleDown size={20} color="#F75A68"/>
                            Loss 
                        </ButtonRadio>
                    </DivRadio>

                    <button type="submit">Register</button>
                </form>
            
            </Content>

        </Dialog.Portal>

    )
}