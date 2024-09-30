import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export function Header() {
    return(
        <Container>
            <Profile to={"/profile"}>
                <img src="https://github.com/nop-dev.png" alt="Foto do User" />
            

                <div id="identify">
                    <span>Bem vindo!</span>
                    <strong>Nop-Dev</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}