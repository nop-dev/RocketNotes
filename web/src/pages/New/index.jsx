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

	function handleAddLink() {
		setLinks((PrevState) => [...PrevState, newLink]);
		setNewLink("");
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
						{
                            links.map((link, index) => (
                                <NoteItem key={String(index)} value={link} onClick={() => {}} />
                            ))
                        }
                        
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
							<NoteItem value="react" />
							<NoteItem $isnew placeholder="Nova tag" />
						</div>
					</Section>

					<Button title="Salvar" />
				</Form>
			</main>
		</Container>
	);
}
