import { MagnifyingGlass } from "phosphor-react";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
    query: z.string(),
})

type searchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm(){

    const { register, handleSubmit, formState:{isSubmitting} } = useForm<searchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearch(data: searchFormInputs){
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(data)
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