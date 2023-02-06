import { Container, Icon, Message, Text } from "./styles";


export function ListEmpty(){
    return(
    <Container>
        <Icon/>
        <Message>Você ainda não tem tarefas cadastradas</Message>
        <Text>Crie tarefas e organize seus itens a fazer</Text>
    </Container>
    )
}