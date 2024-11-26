import { RiShutDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Container, Logout, Profile } from "./styles";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { useAuth } from "../../hooks/auth";
import { api } from "../../service/api";

export function Header() {
	const { signOut, user } = useAuth();

	const navigation = useNavigate();

	function handleSignOut() {
		navigation("/")
		signOut();
	}

	const avatarURL = user.avatar
		? `${api.defaults.baseURL}/files/${user.avatar}`
		: avatarPlaceholder;

	return (
		<Container>
			<Profile to={"/profile"}>
				<img src={avatarURL} alt={user.name} />

				<div id="identify">
					<span>Bem vindo!</span>
					<strong>{user.name}</strong>
				</div>
			</Profile>

			<Logout onClick={handleSignOut}>
				<RiShutDownLine />
			</Logout>
		</Container>
	);
}
