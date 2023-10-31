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
    transactions: TransactionsProps[]
}
export const TrasactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: childrenProps){

    const [transactions, setTrasactions] = useState<TransactionsProps[]>([]);

    async function loadTransactions(){
        const response = await fetch('http://localhost:3333/transactions');
        const data = await response.json();
        
        setTrasactions(data) 
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return(
        <TrasactionContext.Provider value={{transactions}}>
            {children}
        </TrasactionContext.Provider>
    )
}