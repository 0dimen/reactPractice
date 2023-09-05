import {useReducer} from 'react';
import TaskList from './taskList';
import AddTask from './addTask';

export default function TaskApp(){
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    
    function handleAddTask(text){
        // setTasks([...tasks,
        //     {
        //         id: nextId++,
        //         text: text,
        //         done: false,
        //     },
        // ]);
        dispatch({
            type:'added',
            id: nextId++,
            text: text,
        });
    }

    function handleChangeTask(task){
        // setTasks(
        //     tasks.map((t) =>{
        //         if(task.id === t.id)
        //             return (task);
        //         else
        //             return t;
        //     }
        // ))
        dispatch({
            type: 'changed',
            task: task,
        });
    }
    function handleDeleteTask(taskId){
        // setTasks(
        //     tasks.filter((t) => t.id != task.id)
        // );
        dispatch({
            type: 'deleted',
            id: taskId,
        });
    }



    return(
        <>
            <h1>Prague itinerary</h1>
            <AddTask onClickAdd={handleAddTask} />
            <TaskList tasks = {tasks} onChangeTask = {handleChangeTask} onDeleteTask = {handleDeleteTask}/>
        </>
    )

}

function tasksReducer(tasks, action){
    switch(action.type){
        case 'added' :{
            return(
                [
                    ...tasks,
                    {
                        id: action.id,
                        text: action.text,
                        done: false,
                    }
                ]
            );
        }

        case 'changed' : {
            return(
                [
                    tasks.map(task=>{
                        if(task.id === action.task.id){
                            return action.task;
                        } else{
                            return task;
                        }
                    })
                ]
            );
        }
        
        case 'deleted' :{
            return([
                tasks.filter(task => task.id !== action.task.id)
            ]);
        }

        default: {
            throw Error(`Unknown action : ${action.type}`);
        }
    }
    
}

let nextId = 3;

const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true},
    {id: 1, text: 'Watch a puppet show', done: false},
    {id: 2, text: 'Lennon Wall pic', done: false},
  ];

