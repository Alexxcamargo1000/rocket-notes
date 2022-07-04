import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Container, Links } from './styles'
 export function Details() {
  return (
    <Container>
      <Header/>
        <ButtonText title="Excluir Nota"/>
        <Section title="Links uteis">
          <Links>
            <li><a href="">link1</a></li>
            <li><a href="">link2</a></li>
          </Links>
        </Section>
        <Section title="Marcadores">
          <Tag title="React"/>
        </Section>  
        <Button title="voltar"/>
    </Container>
  )
}


