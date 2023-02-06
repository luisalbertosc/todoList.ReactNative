import { useState } from "react";
import { useContext } from "react";

import {TodoContext} from "@context/TodoContext"

import { Button, ContainerInput, Icon, InputComponent } from "./styles";
import { useTheme } from "styled-components/native";
import { Alert } from "react-native";



export function Input(){
    const [title, setTitle] = useState('')
    const { COLORS } = useTheme();

    const {tasks, handleAddNewTask } = useContext(TodoContext)

    function handleButtonPlus(title: string){
        if(title.trim().length === 0) {
            return Alert.alert('Nova Tarefa', 'Informe o título da tarefa para adicionar.');
          }
        const isTaskAlreadyExists = tasks.some(task => task.title === title)

        if(isTaskAlreadyExists){
            return Alert.alert('Tarefa já existe', 'A tarefa já existe na lista de tarefas.');
        }
        handleAddNewTask(title)
        setTitle('')
    }

    return(
        <ContainerInput>

            <InputComponent 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={COLORS.GRAY_300}
            autoCorrect={false}
            onChangeText={setTitle}
            value={title}
            returnKeyType="done"
            onSubmitEditing={() => handleButtonPlus(title)}
            />

            <Button onPress={() => handleButtonPlus(title)}>
                <Icon/>
            </Button>
        </ContainerInput>
    )
}