import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout, Profile } from "./styles";

import { api } from "../../service/api";
import { useAuth } from "../../hooks/auth";

export function Header() {
	const { signOut, user } = useAuth();

	const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

	return (
		<Container>
			<Profile to={"/profile"}>
				<img src={avatarURL} alt={user.name} />

				<div id="identify">
					<span>Bem vindo!</span>
					<strong>{user.name}</strong>
				</div>
			</Profile>

			<Logout onClick={signOut}>
				<RiShutDownLine />
			</Logout>
		</Container>
	);
}
