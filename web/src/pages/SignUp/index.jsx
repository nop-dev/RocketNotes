import { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Background, Container, Form } from "./styles";

import { api } from "../../service/api";

import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	function handleSignUp() {
		if (!name || !email || !password) {
			return alert("Preencha todos os campos corretamente...");
		}

		api
			.post("/users/", { name, email, password })
			.then(() => {
				alert("Usuário cadastrado com sucesso!");
				navigate("/")
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message);
				} else {
					alert("Não foi possível cadastrar...");
					console.log(error.response.data.message)
				}
			});
	}

	return (
		<Container>
			<Form>
				<h1>Rocket Notes</h1>
				<p>Aplicação para salvar e gerenciar seus links úteis.</p>

				<h2>Crie sua conta</h2>

				<Input
					placeholder="Nome"
					type="text"
					icon={FiUser}
					onChange={(e) => setName(e.target.value)}
				/>

				<Input
					placeholder="E-mail"
					type="text"
					icon={FiMail}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<Input
					placeholder="Senha"
					type="password"
					icon={FiLock}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<Button title="Cadastrar" onClick={handleSignUp} />

				<Link to="/">Voltar para login</Link>
			</Form>

			<Background />
		</Container>
	);
}
