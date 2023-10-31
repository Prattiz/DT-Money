import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { Container, Card } from "./styles";
import { priceFormater } from "../../utils/formater";
import { useSummary } from "../../hooks/useSumary";



export function Summary() {

    const summary = useSummary()

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