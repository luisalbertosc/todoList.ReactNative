import { TodoContext } from "@context/TodoContext";
import { useState, useContext } from "react"
import { ButtonSelect, Container, IconCheck, IconTrash, RemoveButton, Text } from "./styles";


type Props = {
    id:  number;
    title: string;
    isDone: boolean;
}
export function Task({ title }: Props){
    const [check, setCheck] = useState(false)

  const { handleUpdateCheckTask, handleRemoveTask} = useContext(TodoContext)

  function handleCheckTask(title: string) {
        setCheck(!check)
        handleUpdateCheckTask(title)
    
}
    return(
        <Container>
            <ButtonSelect isDone={check} onPress={()=>handleCheckTask(title)}>
                {check && <IconCheck/>}
            </ButtonSelect>
            <Text isDone={check} numberOfLines={2}>
                {title}
            </Text>
            <RemoveButton onPress={()=>handleRemoveTask(title)}>
                <IconTrash/>
            </RemoveButton>

        </Container>
    )
}