import { useEffect, useState } from "react";
import { api } from "../../service/api";

import { FiPlus, FiSearch } from "react-icons/fi";
import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home() {
	const [tags, setTags] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);

	function handleTagSelection(tagName) {
		if (tagName === "all") {
			setSelectedTags([]);
		} else {
			setSelectedTags((prev) =>
				prev.includes(tagName)
					? prev.filter((tag) => tag !== tagName)
					: [...prev, tagName]
			);
		}
	}

	useEffect(() => {
		async function fetchTags() {
			const response = await api.get("/tags");
			setTags(response.data);
		}

		fetchTags();
	}, []);

	return (
		<Container>
			<Brand>
				<h1>Rocketnotes</h1>
			</Brand>

			<Header />

			<Menu>
				<li>
					<ButtonText
						title="Todos"
						onClick={() => handleTagSelection("all")}
						$isactive={selectedTags.length === 0}
					/>
				</li>

				{tags.map((tag) => (
					<li key={String(tag.id)}>
						<ButtonText
							title={tag.title}
							onClick={() => handleTagSelection(tag.title)}
							$isactive={selectedTags.includes(tag.title)}
						/>
					</li>
				))}
			</Menu>

			<Search>
				<Input placeholder="Pesquisar pelo título" icon={FiSearch} />
			</Search>

			<Content>
				<Section title="Minhas Notas">
					<Note
						data={{
							title: "React",
							tags: [
								{ id: 1, name: "react" },
								{ id: 2, name: "js" },
							],
						}}
					/>
				</Section>
			</Content>

			<NewNote to={"/new"}>
				<FiPlus />
				Criar Nota
			</NewNote>
		</Container>
	);
}
