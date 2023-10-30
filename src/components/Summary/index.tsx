import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { Container, Card } from "./styles";



export function Summary() {

  return (
    <Container>
        <Card>
            <header>
                <span>Deposits</span>
                <ArrowCircleUp size={32} color="#00B37E"/>
            </header>

            <strong>R$ 100.000</strong>
        </Card>

        <Card>
            <header>
                <span>Loss</span>
                <ArrowCircleDown size={32} color="#F75A68"/>
            </header>

            <strong>R$ 10.000</strong>
        </Card>

        <Card>
            <header>
                <span>Total</span>
                <CurrencyDollar size={32} color="#fff"/>
            </header>
            <strong>R$ 90.000</strong>
        </Card>
    </Container>
  )
}