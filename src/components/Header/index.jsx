import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api"
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useNavigate } from "react-router-dom";


export function Header() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleSignOut() {
    signOut()
    navigate("/")
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src={avatarUrl} alt={`foto do usuário ${user.name}`}/>
        <div>
          <span>Bem vindo,</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine size={36} />
      </Logout>
    </Container>
  );
}
