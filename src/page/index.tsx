import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { SearchForm } from "./components/SearchForm";

import { Container, Trasaction, Price } from "./styles";


export function App() {

  return (
    <Container>
      <Header/>
      <Summary/>
      
     <Trasaction>
      <SearchForm/>
      
      <table>
          <tbody>
            <tr>
              <td width="50%">Pizza</td>
              <td><Price variant="outcome">- R$ 100,00</Price></td>
              <td>Alimentação</td>
              <td>10/11/2022</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td><Price variant="Income">R$ 12.000,00</Price></td>
              <td>Venda</td>
              <td>02/11/2022</td>
            </tr>
          </tbody>
        </table>
     </Trasaction>
    </Container>
  )
}


