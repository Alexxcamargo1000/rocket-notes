import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { Container, Form} from "./styles";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="/">Voltar</a>
          </header>

          <Input
            placeholder="Titulo"
          />
          <Textarea placeholder="Observações" />
          <Section title="Links Uteis">
            <NoteItem value="https://github.com"/>
            <NoteItem isNew placeholder="Novo link"/>
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React"/>
              <NoteItem isNew placeholder="Nova Tag"/>
            </div>
          </Section>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  )
}