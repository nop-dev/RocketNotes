import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from "../../service/api";

import { Avatar, Container, Form } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiArrowLeft, FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";

export function Profile() {
	const { user, updateProfile } = useAuth();
	const [name, setName] = useState(user.name);
	const [email, setEmail] = useState(user.email);
	const [oldPassword, setOldPassword] = useState();
	const [newPassword, setNewPassword] = useState();

	const avatarURL = user.avatar
		? `${api.defaults.baseURL}/files/${user.avatar}`
		: avatarPlaceholder;
	const [avatar, setAvatar] = useState(avatarURL);
	const [avatarFile, setAvatarFile] = useState(null);

	const navigate = useNavigate();

	async function handleUpdate() {
		const updated = {
			name,
			email,
			password: newPassword,
			old_password: oldPassword,
		};

		const userUpdated = Object.assign(user, updated);

		await updateProfile({ user: userUpdated, avatarFile });
	}

	function handleAvatarChanging(event) {
		const file = event.target.files[0];
		setAvatarFile(file);

		const imagePreview = URL.createObjectURL(file);
		setAvatar(imagePreview);
	}

	function handleBack() {
		navigate(-1);
	}

	return (
		<Container>
			<header>
				<button type="button" onClick={handleBack}>
					<FiArrowLeft />
				</button>
			</header>

			<Form>
				<Avatar>
					<img src={avatar} alt="Foto do usuário" />

					<label htmlFor="avatar">
						<FiCamera />
						<input id="avatar" type="file" onChange={handleAvatarChanging} />
					</label>
				</Avatar>

				<Input
					placeholder="Nome"
					type="text"
					icon={FiUser}
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<Input
					placeholder="E-mail"
					type="email"
					icon={FiMail}
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					placeholder="Senha atual"
					type="password"
					icon={FiLock}
					onChange={(e) => setOldPassword(e.target.value)}
				/>

				<Input
					placeholder="Nova senha"
					type="password"
					icon={FiLock}
					onChange={(e) => setNewPassword(e.target.value)}
				/>

				<Button title={"Salvar"} onClick={handleUpdate} />
			</Form>
		</Container>
	);
}
