import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { Container, Links, Content } from "./styles";
export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            necessitatibus libero modi optio non reiciendis sint sed distinctio
            architecto provident quos. Sapiente animi, quo unde rerum cum aut
            laboriosam exercitationem.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam,
            necessitatibus libero modi optio non reiciendis sint sed distinctio
            architecto provident quos. Sapiente animi, quo unde rerum cum aut
            laboriosam exercitationem.
          </p>
          <Section title="Links uteis">
            <Links>
              <li>
                <a href="">link1</a>
              </li>
              <li>
                <a href="">link2</a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="React" />
          </Section>
          <Button title="voltar" />
        </Content>
      </main>
    </Container>
  );
}
