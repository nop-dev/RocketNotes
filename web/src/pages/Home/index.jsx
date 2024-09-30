import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Note } from '../../components/Note';
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input';

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <ButtonText title="Todos"   />
        <ButtonText title="Front-End"/>
        <ButtonText title="Node"/>
        <ButtonText title="React"/>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">

          <Note data = {{
            title:  "React",
            tags: [
                    { id: 1, name: 'react'},
                    { id: 2, name: 'js'}
                  ]
          }} />

        </Section>
      </Content>

      <NewNote to={"/new"}>
        <FiPlus />
          Criar Nota
      </NewNote>
    </Container>
  )
}