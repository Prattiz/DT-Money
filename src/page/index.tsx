import { useContext } from "react";
import { Header } from "../components/Header";
import { Summary } from "../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { TrasactionContext } from "../context/context";

import { Container, Trasaction, Price } from "./styles";




export function Home() {

  const { transactions } = useContext(TrasactionContext)

  return (
    <Container>
      <Header/>
      <Summary/>
      
     <Trasaction>
      <SearchForm/>
      
      <table>
          <tbody>
            {
            transactions.map(transactions => {
              return(
                <tr key={transactions.id}>
                  <td width="50%">{transactions.description}</td>

                  <td>
                    <Price variant={transactions.type}>
                    R$ {transactions.price}
                    </Price>
                  </td>

                  <td>{transactions.category}</td>
                  <td>{transactions.createdAt}</td>
                </tr>
              )
              })
            }
          </tbody>
        </table>
     </Trasaction>
    </Container>
  )
}


