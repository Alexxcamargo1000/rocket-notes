import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"
import { api } from "../../services/api"
import { Container, Form, Avatar } from "./styles";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);
  const navigate = useNavigate()

  function handleBack() {
    navigate(-1);
  }

  async function handleUpdateProfile(){
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    }

    const userUpdated =  Object.assign(user, updated); 
    await updateProfile({user: userUpdated, avatarFile})
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <button onClick={handleBack}>
          <FiArrowLeft size={24} />
        </button>
      </header>

      <Form>
        <Avatar>
          <img
            src={avatar}
            alt="Foto do usuário"
          />
          <label htmlFor="avatar">
            <FiCamera size={20} />
          </label>
          <input type="file" id="avatar" onChange={handleChangeAvatar}/>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Input 
          placeholder="Email" 
          type="text" 
          icon={FiMail}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha Atual" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordOld(e.target.value)}
          value={passwordOld}
        />
        <Input 
          placeholder="Nova senha" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordNew(e.target.value)}
          value={passwordNew}

        />

        <Button title="Salvar" onClick={handleUpdateProfile} />
      </Form>
    </Container>
  );
}
