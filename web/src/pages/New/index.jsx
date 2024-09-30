import { Container, Form } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Link } from "react-router-dom";

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to={"/"}>Voltar</Link>
                    </header>
                    
                    <Input 
                        placeholder="Título"
                        type="text"
                    />

                    <Textarea placeholder="Observações" />

                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem $isnew placeholder="Novo link" />
                    </Section>

                    <Section title="Marcadores" className="tags">
                        <div className="tags">
                            <NoteItem value="react" />
                            <NoteItem $isnew placeholder="Nova tag" />
                        </div>
                        
                    </Section>

                    <Button title="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}