import { useState } from "react";

// ? 값이 변경될 때마다 값을 갱신하는 것이 효율적인가, 완전히 변경 후 리스트 자체를 렌더링하는 것이 효율적인가.

export default function TaskList({tasks, onChangeTask, onDeleteTask}){
    
    
    return(
        <ul>
            {tasks.map(((task) => 
                <List key={task.id} task = {task} onChangeTask = {onChangeTask} onDeleteTask={onDeleteTask}/>
                ))}
        </ul>
    );
}

function List({task, onChangeTask, onDeleteTask}){
    const [isEditing, setIsEditing] = useState(false);
    return(
        <li key = {task.id}>
                    <input
                        type="checkbox"
                        checked={task.done}
                        onChange={()=>onChangeTask({...task, done: !task.done})}
                        />
                    {isEditing ? 
                        <div>
                            <input
                                value={task.text}
                                onChange={(e) => onChangeTask({...task, text: e.target.value})}
                                />
                            <button onClick={()=>setIsEditing(false)}>Save</button> 
                        </div>
                        :
                        <div>
                            <p>{task.text}</p>
                            <button onClick={()=> setIsEditing(true)} >Edit</button>
                        </div>
                    }
                    <button onClick={()=> onDeleteTask(task)}>Delete</button>
                </li>
    );
}