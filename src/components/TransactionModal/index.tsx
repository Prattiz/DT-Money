import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { OverLay, Content, XButton, DivRadio, ButtonRadio } from "./styles";

import * as Dialog from "@radix-ui/react-dialog";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

import { Controller, useForm } from "react-hook-form";
import { TrasactionContext } from "../../context/context";
import { useContext } from "react";



const newTrasactionSchema = z.object({
    
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(['income', 'outcome'])
})

type newTransactionInput = z.infer<typeof newTrasactionSchema>

export function TransactionModal(){

    const { createTransaction} = useContext(TrasactionContext)
    const { register, handleSubmit, formState: {isSubmitting}, control, reset } = useForm<newTransactionInput>({
        resolver: zodResolver(newTrasactionSchema)
    })

    async function handleCreateNewTransaction(data: newTransactionInput){
        await createTransaction({...data})

        reset()
    }
    
    return(
        <Dialog.Portal>

            <OverLay />

            <Content>
                <Dialog.Title>New Transaction</Dialog.Title>
                <XButton><X/></XButton>
                
                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text"
                     required
                      {...register('description')}
                      placeholder="Description"/>

                    <input type="text"
                     required
                      {...register('price', {valueAsNumber: true})}
                      placeholder="Price"/>

                    <input type="text"
                     required
                      {...register('category')}
                      placeholder="Category"/>

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {

                        return (
                            <DivRadio 
                            onValueChange={field.onChange} value={field.value}
                            >
                                <ButtonRadio variant="income" value="income">
                                    <ArrowCircleUp /> Profit
                                </ButtonRadio>

                                <ButtonRadio variant="outcome" value="outcome">
                                    <ArrowCircleDown /> Loss
                                </ButtonRadio>
                            </DivRadio>
                        )}}
                    />

                    <button type="submit" disabled={isSubmitting}>Register</button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}