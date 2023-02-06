import { createContext, ReactNode, useState } from "react";
import { Alert } from "react-native";
import uuid from "react-native-uuid"

type tasksProps = {
   id:  number,
   title: string,
   isDone: boolean
}


export type TodoContextDataProps = {
 tasks: tasksProps[];
 handleAddNewTask: (title:string) => void;
 handleRemoveTask: (title:string) => void;
 handleUpdateCheckTask: (title:string) => void;

};

type TodoContextProviderProps = {
  children: ReactNode;
};

export const TodoContext = createContext<TodoContextDataProps>(
  {} as TodoContextDataProps
);

export const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [tasks, setTasks] = useState<tasksProps[]>([]);

  function handleAddNewTask(title: string){

     const newTask = {
     id: Number(uuid.v4()),
     title,
     isDone: false,
     };


    setTasks((oldState) => 
    [...oldState, newTask]
  )
  }

  function handleUpdateCheckTask(title: string) {
    const newTasks = tasks.map((task) =>
      task.title === title
        ? {
            ...task,
            isDone: !task.isDone,
          }
        : task
    );

    setTasks(newTasks);
  }

  function handleRemoveTask(title:string){

    Alert.alert('Remover', `Você deseja remover a tarefa '${title}'?`,[
      {
        text: 'Sim',
        onPress: ()=> setTasks(tasks.filter(task => task.title != title))
      },
      {
        text: 'Não'
      }
    ])
  }


  return (
    <TodoContext.Provider
      value={{
        tasks,
        handleAddNewTask,
        handleRemoveTask,
        handleUpdateCheckTask
      } 
      }
    >
      {children}
    </TodoContext.Provider>
  );
};
