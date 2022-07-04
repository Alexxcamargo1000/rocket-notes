import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Container, Links } from './styles'
 export function Details() {
  return (
    <Container>
      <Header/>
   
        <Section title="Links uteis">
          <Links>
            <li><a href="">link1</a></li>
            <li><a href="">link2</a></li>
          </Links>
        </Section>
        <Section title="Marcadores">
          
        </Section>
        <Button title="voltar"/>
    </Container>
  )
}


