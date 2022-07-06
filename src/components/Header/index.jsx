import { Container, Profile, Logout  } from "./styles"
import {RiShutDownLine} from "react-icons/ri"
export function Header() {
  return (
    <Container>
        <Profile to="/profile">
            <img src="https://github.com/alexxcamargo1000.png" alt="alex" />
            <div>
              <span>Bem vindo,</span>
              <strong>Alex Camargo</strong>
            </div>          
        </Profile>  
      <Logout>
        <RiShutDownLine size={36}/>
      </Logout>
    </Container>
  )
}