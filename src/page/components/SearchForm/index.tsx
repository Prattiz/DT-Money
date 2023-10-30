import { MagnifyingGlass } from "phosphor-react";
import { Form } from "./styles";

export function SearchForm(){
    return(
        <Form>
            <input type="text" placeholder="Search for Transactions"/>
            
            <button type="submit"> 
                <MagnifyingGlass size={20} />
                Search
            </button>
        </Form>
    )
}