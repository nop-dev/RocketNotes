import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Content, Links } from "./styles";

import { api } from "../../service/api";

import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tags";

export function Details() {
	const [data, setData] = useState("");
	const params = useParams();

	const navigate = useNavigate();

	async function handleRemove() {
		const confirm = window.confirm("Deseja realmente remover a nota?");

		if (confirm) {
			await api.delete(`/notes/${params.note_id}`);

			handleBack();
		}
	}

	function handleBack() {
		navigate(-1);
	}

	useEffect(() => {
		async function fetchNote() {
			console.log(params.note_id);
			const response = await api.get(`/notes/${params.note_id}`);
			setData(response.data);
		}

		fetchNote();
	}, []);

	return (
		<Container>
			<Header />

			{
				<main>
					<Content>
						<ButtonText title="Excluir Nota" onClick={handleRemove} />

						<h1>{data.title}</h1>

						<p>{data.description}</p>

						{data.links && (
							<Section title="Links Úteis">
								<Links>
									{data.links.map((link) => (
										<li key={String(link.id)}>
											<a href={link.url} target="_blank" rel="noreferrer">
												{link.url}
											</a>
										</li>
									))}
								</Links>
							</Section>
						)}

						{data.tags && (
							<Section title="Marcadores">
								{data.tags.map((tag) => (
									<Tag key={tag.id} title={tag.title} />
								))}
							</Section>
						)}

						<Link to={"/"}>
							<Button title="Voltar" onClick={handleBack} />
						</Link>
					</Content>
				</main>
			}
		</Container>
	);
}
