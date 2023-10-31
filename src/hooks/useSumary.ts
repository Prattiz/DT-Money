import { TrasactionContext } from "../context/context";
import { useContext } from "react";

export function useSummary(){
    const { transactions } = useContext(TrasactionContext);

    const summary = transactions.reduce((acc, transactions) =>
    {
        if(transactions.type === 'income') {
            acc.income += transactions.price
            acc.total += transactions.price
        } else{
            acc.outcome += transactions.price
            acc.total -= transactions.price
        }
        return acc
    }, 
    {
        'income': 0,
        'outcome': 0,
        'total':0
    })

    return summary
}