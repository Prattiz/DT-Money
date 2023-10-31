import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { Container, Card } from "./styles";
import { useContext } from "react";
import { TrasactionContext } from "../../context/context";
import { priceFormater } from "../../utils/formater";



export function Summary() {

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

  return (
    <Container>
        <Card>
            <header>
                <span>Gains</span>
                <ArrowCircleUp size={32} color="#00B37E"/>
            </header>

            <strong>{priceFormater.format(summary.income)}</strong>
        </Card>

        <Card>
            <header>
                <span>Loss</span>
                <ArrowCircleDown size={32} color="#F75A68"/>
            </header>

            <strong>{priceFormater.format(summary.outcome)}</strong>
        </Card>

        <Card>
            <header>
                <span>Total</span>
                <CurrencyDollar size={32} color="#fff"/>
            </header>
            <strong>{priceFormater.format(summary.total)}</strong>
        </Card>
    </Container>
  )
}