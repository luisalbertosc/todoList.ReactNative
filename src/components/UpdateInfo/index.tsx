import { TodoContext } from "@context/TodoContext";
import { useContext } from "react";
import { Container, 
         ContainerCreated, 
         ContainerDone, 
         NumberCreated, 
         NumberDone, 
         NumberText, 
         TextCreated, 
         TextDone } from "./styles";


export function UpdateInfo(){
    const {tasks} = useContext(TodoContext);

    const totalCreatedTasks = tasks.length;
    const totalDoneTasks = tasks.reduce(
      (total, task) => (total += task.isDone ? 1 : 0),
      0
    );

    return(
        <Container>
            <ContainerCreated>
                <TextCreated>Criadas</TextCreated>
                <NumberCreated>
                    <NumberText>{totalCreatedTasks}</NumberText>
                </NumberCreated>
            </ContainerCreated>
            <ContainerDone>
                <TextDone>Concluídas</TextDone>
                <NumberDone>
                    <NumberText>{totalDoneTasks}</NumberText>
                </NumberDone>
            </ContainerDone>
        </Container>
    )
}