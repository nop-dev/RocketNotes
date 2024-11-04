import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout, Profile } from "./styles";

import { useAuth } from "../../hooks/auth";

export function Header() {
	const { signOut } = useAuth();

	return (
		<Container>
			<Profile to={"/profile"}>
				<img src="https://github.com/nop-dev.png" alt="Foto do User" />

				<div id="identify">
					<span>Bem vindo!</span>
					<strong>Nop-Dev</strong>
				</div>
			</Profile>

			<Logout onClick={signOut}>
				<RiShutDownLine />
			</Logout>
		</Container>
	);
}
