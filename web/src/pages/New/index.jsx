import { useState } from "react";
import { Container, Form } from "./styles";

import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";

export function New() {
	const [links, setLinks] = useState([]);
	const [newLink, setNewLink] = useState("");

	const [tags, setTags] = useState([]);
	const [newTag, setNewTag] = useState("");

	function handleAddLink() {
		setLinks((prevState) => [...prevState, newLink]);
		setNewLink("");
	}

	function handleRemoveLink(deleted) {
		setLinks((prevState) => prevState.filter((link) => link !== deleted));
	}

	function handleAddTag() {
		setTags((prevState) => [...prevState, newTag]);
		setNewTag("");
	}

	function handleRemoveTag(deleted) {
		setTags((prevState) => prevState.filter((tag) => tag !== deleted));
	}

	return (
		<Container>
			<Header />

			<main>
				<Form>
					<header>
						<h1>Criar Nota</h1>
						<Link to={"/"}>Voltar</Link>
					</header>

					<Input placeholder="Título" type="text" />

					<Textarea placeholder="Observações" />

					<Section title="Links úteis">
						{links.map((link, index) => (
							<NoteItem
								key={String(index)}
								value={link}
								onClick={() => handleRemoveLink(link)}
							/>
						))}

						<NoteItem
							$isnew
							value={newLink}
							placeholder="Novo link"
							onChange={(e) => setNewLink(e.target.value)}
							onClick={handleAddLink}
						/>
					</Section>

					<Section title="Marcadores" className="tags">
						<div className="tags">
							{tags.map((tag, index) => (
								<NoteItem
									value={tag}
									key={String(index)}
									onClick={() => handleRemoveTag(tag)}
								/>
							))}

							<NoteItem
								$isnew
								placeholder="Nova tag"
								onChange={(e) => setNewTag(e.target.value)}
								onClick={handleAddTag}
							/>
						</div>
					</Section>

					<Button title="Salvar" />
				</Form>
			</main>
		</Container>
	);
}
