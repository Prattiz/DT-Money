import { ReactNode, createContext } from "react";
import { useEffect, useState } from "react";

interface childrenProps{
    children: ReactNode
}

interface TransactionsProps{

    id: number,
    category: string,
    description: string,
    type: 'income' | 'outcome',
    price: number,
    createdAt: string 
}

interface TransactionContextType{
    transactions: TransactionsProps[],
    loadTransactions: (query?: string) => Promise<void>,
}
export const TrasactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: childrenProps){

    const [transactions, setTrasactions] = useState<TransactionsProps[]>([]);

    async function loadTransactions(query?: string){
        const url = new URL('http://localhost:3333/transactions');
        
        if(query){
            url.searchParams.append('q', query)
        }

        const response = await fetch(url);
        const data = await response.json();
        
        setTrasactions(data) 
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return(
        <TrasactionContext.Provider value={{transactions, loadTransactions}}>
            {children}
        </TrasactionContext.Provider>
    )
}