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

interface CreateTransactionProps{
    description: string,
    price: number,
    category: string,
    type: 'income' | 'outcome',
}

interface TransactionContextType{
    transactions: TransactionsProps[],
    loadTransactions: (query?: string) => Promise<void>,
    createTransaction: (data:CreateTransactionProps) =>Promise<void>
}


export const TrasactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: childrenProps){

    const [transactions, setTrasactions] = useState<TransactionsProps[]>([]);

    async function loadTransactions(query?: string){
        const response = await api.get('transactions', {
            params: {

                _sort: "createdAt",
                _order: "desc",
                'q': query,
            }
        });
        
        setTrasactions(response.data) 
    }

    async function createTransaction(data: CreateTransactionProps){

        const response =  await api.post('transactions', {
            ...data,
            createdAt: new Date(),
        })

        setTrasactions(state => [response.data, ...state ] )
    }

    useEffect(() => {
        loadTransactions()
    }, [])

    return(
        <TrasactionContext.Provider value={{transactions, loadTransactions, createTransaction}}>
            {children}
        </TrasactionContext.Provider>
    )
}