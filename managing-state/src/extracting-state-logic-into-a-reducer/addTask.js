import { useState } from "react";

export default function AddTask({onClickAdd}){
    const [input, setInput] = useState('');
    return(
        <div>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={()=> onClickAdd(input)}>Add</button>
        </div>
    );
}
