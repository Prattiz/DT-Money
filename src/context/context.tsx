import { ReactNode, createContext } from "react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

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
        const response = await api.get('transactions',{
            params: {
                'q': query
            }
        })
        
        setTrasactions(response.data) 
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