import { useContext } from "react";
import { FlatList } from "react-native";

import {TodoContext} from "@context/TodoContext"
import { Container, ListTasksContainer } from "./styles";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Task } from "@components/Task";
import { UpdateInfo } from "@components/UpdateInfo";
import { ListEmpty } from "@components/ListEmpty";


export function Home(){

   const { tasks } = useContext(TodoContext)
    return(
        <Container>
            <Header/>
            <Input
            />
            <UpdateInfo/>
            <ListTasksContainer>
            <FlatList
             data={tasks}
             keyExtractor={(item) => item.title}
             renderItem={({ item }) => (
                <Task
                id={item.id}
                title={item.title}
                isDone
                />
             )}
             ListEmptyComponent={() => (
                <ListEmpty />
              )}
              showsVerticalScrollIndicator={false}
            />
          </ListTasksContainer>
        </Container>
       
    )
}