import { MagnifyingGlass } from "phosphor-react";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContextSelector } from "use-context-selector";
import { TrasactionContext } from "../../../context/context";

const searchFormSchema = z.object({
    query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){

    const loadTransactions = useContextSelector(TrasactionContext, (context) => {
        return context.loadTransactions
    })
    
    const { register, handleSubmit, formState:{isSubmitting} } = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearch(data: searchFormInputs){
        await loadTransactions(data.query)
    }
    
    return(
        <Form onSubmit={handleSubmit(handleSearch)}>
            <input 
            type="text" 
            placeholder="Search for Transactions"
            {...register('query')}
            />
            
            <button type="submit" disabled={isSubmitting}> 
                <MagnifyingGlass size={20} />
                Search
            </button>
        </Form>
    )
}