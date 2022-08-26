import { Background, Container, Form } from "./styles";
import {FiUser, FiLock, FiMail} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useState } from "react";
import { api } from "../../services/api"

export function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSingUp(e){
    e.preventDefault();

    if(!name || !email || !password) {
      alert("preencha todos os campos");
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("usuário cadastrado com sucesso");
      navigate("/");
    })
    .catch((error) => {
      if(error.response) {
        alert(error.response.data.message);
      } else {
        alert("não foi possível cadastrar")
      }
    })
  }
  
  return (
    <Container>
      
      <Background/>

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para salvar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={e => setName(e.target.value)}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSingUp}/>

        <Link to="/">Voltar para Login</Link>

      </Form>


    </Container>
  )
}