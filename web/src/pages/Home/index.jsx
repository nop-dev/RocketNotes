import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";

import { FiPlus, FiSearch } from "react-icons/fi";
import { Brand, Container, Content, Menu, NewNote, Search } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home() {
	const [search, setSearch] = useState("");

	const [tags, setTags] = useState([]);
	const [selectedTags, setSelectedTags] = useState([]);

	const [notes, setNotes] = useState([]);

	const navigate = useNavigate();

	function handleTagSelection(tagName) {
		if (tagName === "all") {
			return setSelectedTags([]);
		}
		const alreadySelected = selectedTags.includes(tagName);

		if (alreadySelected) {
			const filteredTags = selectedTags.filter((tag) => tag !== tagName);
			setSelectedTags(filteredTags);
		} else {
			setSelectedTags((prevState) => [...prevState, tagName]);
		}
	}

	function handleNoteDetails(id) {
		navigate(`/details/${id}`);
	}

	useEffect(() => {
		async function fetchTags() {
			const response = await api.get("/tags");
			setTags(response.data);
		}

		fetchTags();
	}, []);

	useEffect(() => {
		async function fetchNotes() {
			const response = await api.get(
				`/notes?title=${search}&tags=${selectedTags}`,
			);

			setNotes(response.data);
		}

		fetchNotes();
	}, [selectedTags, search]);

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
				<Input
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Pesquisar pelo título"
					icon={FiSearch}
				/>
			</Search>

			<Content>
				<Section title="Minhas Notas">
					{notes.map((note) => (
						<Note key={String(note.id)} data={note} onClick={() => handleNoteDetails(note.id)}/>
					))}
				</Section>
			</Content>

			<NewNote to={"/new"}>
				<FiPlus />
				Criar Nota
			</NewNote>
		</Container>
	);
}

<Note
	data={{
		title: "React",
	}}
/>;
