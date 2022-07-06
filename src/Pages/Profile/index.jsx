import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera} from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";


export function Profile() {

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft size={24}/>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img 
            src="https://github.com/alexxcamargo1000.png" 
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera size={20}/>
          </label>
            <input type="file" id="avatar" />
        </Avatar>
        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input 
          placeholder="Email"
          type="text"
          icon={FiMail}
        />
        <Input 
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
        />
        <Input 
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )

}